import {
  getServerSession,
  type DefaultSession,
  type DefaultUser,
  type NextAuthOptions,
  type Session,
} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '~/lib/env/server';
import { db, roles, sections } from '~/server/db';

declare module 'next-auth' {
  // A nicer way to assert that `email` will not be
  // undefined since we only use the Google provider as of now.
  interface User extends DefaultUser {
    email: string;
  }

  interface Session extends DefaultSession {
    person: {
      id: number;
      name: string;
      role: {
        permissions: (typeof roles.permissions.enumValues)[number][];
      } | null;
      type: 'faculty' | 'staff' | 'student' | 'section';
    };
    /** Present when logged in as a section (e.g., CCN office) */
    section?: {
      id: number;
      name: string;
      email: string;
    };
    user: User;
  }
}

// Helper function to get the department ID for a logged-in HOD (Head of Department)
export async function getHodDepartmentId(session: Session | null) {
  if (!session) return null;

  const hod = await db.query.departmentHeads.findFirst({
    where: (h, { eq, and }) =>
      and(eq(h.facultyId, session.person.id), eq(h.isActive, true)),
    columns: { departmentId: true },
  });

  return hod?.departmentId ?? null;
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session }) {
      // First, try to find the user in the persons table
      const person = await db.query.persons.findFirst({
        columns: { id: true, name: true, type: true },
        where: ({ email }, { eq }) => eq(email, session.user.email),
        with: { role: { columns: { permissions: true } } },
      });

      if (person) {
        session.person = person;
        session.section = undefined;
      } else {
        // If not a person, check if it's a section email (e.g., CCN)
        const section = await db.query.sections.findFirst({
          columns: { id: true, name: true, email: true },
          where: ({ email }, { eq }) => eq(email, session.user.email),
        });

        if (section) {
          // Create a pseudo-person object for section-based login
          session.person = {
            id: section.id,
            name: section.name,
            role: null,
            type: 'section',
          };
          session.section = section;
        } else {
          // Fallback - this shouldn't happen if signIn callback is working correctly
          // but we need to satisfy TypeScript
          session.person = {
            id: 0,
            name: 'Unknown',
            role: null,
            type: 'staff',
          };
        }
      }

      return session;
    },
    async signIn({ user: { email } }) {
      if (!email) return false;

      // Check if the email exists in the persons table
      const person = await db.query.persons.findFirst({
        columns: { id: true },
        where: (person, { eq }) => eq(person.email, email),
      });

      if (person) return true;

      // Also allow section emails to sign in (e.g., ccn@nitkkr.ac.in)
      const section = await db.query.sections.findFirst({
        columns: { id: true },
        where: (section, { eq }) => eq(section.email, email),
      });

      return Boolean(section);
    },
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.email as string,
          email: profile.email as string,
          image: profile.picture as string | null,
        };
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);

/**
 * List of email addresses authorized to manage notifications.
 * Add additional emails to this array to grant notification management access.
 * Currently only CCN (Centre of Computing and Networking) has this permission.
 *
 * Note: These can be either person emails or section emails.
 */
const NOTIFICATION_MANAGERS = ['ccn@nitkkr.ac.in'] as const;

/**
 * Check if the current session user is authorized to manage notifications.
 * Only users with emails in the NOTIFICATION_MANAGERS list can add, edit, or delete notifications.
 * This works for both person-based and section-based logins (e.g., CCN office).
 *
 * @param session - The current user's session or null if not authenticated
 * @returns true if the user is authorized to manage notifications, false otherwise
 *
 * @example
 * const session = await getServerAuthSession();
 * if (canManageNotifications(session)) {
 *   // Show notification management UI
 * }
 */
export function canManageNotifications(session: Session | null): boolean {
  if (!session) return false;

  // Check both user email and section email (for section-based logins)
  const emails = [session.user?.email, session.section?.email].filter(Boolean);

  return emails.some((email) =>
    NOTIFICATION_MANAGERS.includes(
      email as (typeof NOTIFICATION_MANAGERS)[number]
    )
  );
}
