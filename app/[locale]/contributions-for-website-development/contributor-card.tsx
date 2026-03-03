'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaintBrush,
  FaServer,
} from 'react-icons/fa';

import { cn } from '~/lib/utils';

interface ContributorCardProps {
  name: string;
  rollNumber: string;
  image?: string | null;
  rollNumberLabel: string;
  designation: 'developer' | 'designer' | 'devops';
  githubId: string | null;
  linkedinId: string | null;
}

const FALLBACK_IMAGE = '/fallback/user-image.jpg';

const DESIGNATION_BG: Record<ContributorCardProps['designation'], string> = {
  developer:
    'linear-gradient(135deg, rgba(255,255,255,0.50) 0%, rgba(199,210,254,0.40) 100%)',
  designer:
    'linear-gradient(135deg, rgba(255,255,255,0.50) 0%, rgba(251,207,232,0.40) 100%)',
  devops:
    'linear-gradient(135deg, rgba(255,255,255,0.50) 0%, rgba(153,246,228,0.38) 100%)',
};

const DESIGNATION_SHADOW: Record<ContributorCardProps['designation'], string> =
  {
    developer:
      '0 8px 40px rgba(99,102,241,0.3), 0 2px 8px rgba(99,102,241,0.15)',
    designer:
      '0 8px 40px rgba(236,72,153,0.3), 0 2px 8px rgba(236,72,153,0.15)',
    devops: '0 8px 40px rgba(20,184,166,0.28), 0 2px 8px rgba(20,184,166,0.14)',
  };

const DESIGNATION_HOVER_SHADOW: Record<
  ContributorCardProps['designation'],
  string
> = {
  developer:
    '0 16px 56px rgba(99,102,241,0.4), 0 4px 16px rgba(99,102,241,0.2)',
  designer: '0 16px 56px rgba(236,72,153,0.4), 0 4px 16px rgba(236,72,153,0.2)',
  devops: '0 16px 56px rgba(20,184,166,0.38), 0 4px 16px rgba(20,184,166,0.2)',
};

const DESIGNATION_LABEL_COLOR: Record<
  ContributorCardProps['designation'],
  string
> = {
  developer: 'text-indigo-200',
  designer: 'text-pink-200',
  devops: 'text-teal-200',
};

const DESIGNATION_AVATAR_RING: Record<
  ContributorCardProps['designation'],
  string
> = {
  developer: 'ring-indigo-400/50',
  designer: 'ring-pink-400/50',
  devops: 'ring-teal-400/50',
};

const DESIGNATION_ICON: Record<
  ContributorCardProps['designation'],
  React.ReactNode
> = {
  developer: <FaCode size={14} />,
  designer: <FaPaintBrush size={14} />,
  devops: <FaServer size={14} />,
};

/* ---------------- SECURITY HELPERS ---------------- */

function getSafeLinkedInUrl(linkedinId: string | null) {
  if (!linkedinId) return null;

  const trimmed = linkedinId.trim();

  try {
    const url = new URL(trimmed);

    if (
      url.protocol === 'https:' &&
      (url.hostname === 'www.linkedin.com' || url.hostname === 'linkedin.com')
    ) {
      return url.toString();
    }
  } catch {
    // Not a full URL — treat as username
  }

  return `https://www.linkedin.com/in/${encodeURIComponent(trimmed)}`;
}

function getSafeGithubUrl(githubId: string | null) {
  if (!githubId) return null;

  const trimmed = githubId.trim();

  try {
    const url = new URL(trimmed);

    if (
      url.protocol === 'https:' &&
      (url.hostname === 'www.github.com' || url.hostname === 'github.com')
    ) {
      return url.toString();
    }
  } catch {
    // Not a full URL — treat as username
  }

  return `https://github.com/${encodeURIComponent(trimmed)}`;
}

export default function ContributorCard({
  name,
  rollNumber,
  image,
  designation,
  linkedinId,
  githubId,
}: ContributorCardProps) {
  const [useFallback, setUseFallback] = useState(false);
  const [hovered, setHovered] = useState(false);

  const imageSrc = useFallback || !image ? FALLBACK_IMAGE : image;
  const emailAddress = `${rollNumber.toLowerCase()}@nitkkr.ac.in`;

  const safeLinkedInUrl = getSafeLinkedInUrl(linkedinId);
  const safeGithubUrl = getSafeGithubUrl(githubId);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: DESIGNATION_BG[designation],
        boxShadow: hovered
          ? DESIGNATION_HOVER_SHADOW[designation]
          : DESIGNATION_SHADOW[designation],
      }}
      className={cn(
        'group relative w-[280px] rounded-2xl p-6',
        'transition-all duration-300 ease-out',
        hovered && '-translate-y-2'
      )}
    >
      <div className="absolute right-5 top-[55%] pr-2">
        <div className="flex origin-right -rotate-90 items-center gap-1">
          {DESIGNATION_ICON[designation]}
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-wider opacity-80',
              DESIGNATION_LABEL_COLOR[designation]
            )}
          >
            {designation}
          </span>
        </div>
      </div>

      <div
        className={cn(
          'relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full',
          'ring-2 ring-offset-2 ring-offset-transparent',
          DESIGNATION_AVATAR_RING[designation]
        )}
      >
        <Image
          src={imageSrc}
          alt={name}
          width={112}
          height={112}
          className="h-full w-full object-cover"
          onError={() => setUseFallback(true)}
        />
      </div>

      <h4 className="break-words text-center text-xl font-semibold leading-tight text-[#001D3D] px-6">
        {name}
      </h4>

      <p className="text-white/70 text-center text-sm leading-tight tracking-wide">
        {rollNumber}
      </p>

      <div className="mt-3 flex justify-center gap-4">
        {safeGithubUrl && (
          <a
            href={safeGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-white/30 bg-white/20 text-white flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition hover:scale-110"
          >
            <FaGithub size={17} />
          </a>
        )}

        {safeLinkedInUrl && (
          <a
            href={safeLinkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-white/30 bg-white/20 text-white flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition hover:scale-110"
          >
            <FaLinkedin size={17} />
          </a>
        )}

        <a
          href={`mailto:${emailAddress}`}
          className="border-white/30 bg-white/20 text-white flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition hover:scale-110"
        >
          <FaEnvelope size={17} />
        </a>
      </div>
    </article>
  );
}
