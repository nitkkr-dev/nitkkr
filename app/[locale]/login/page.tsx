import { redirect } from 'next/navigation';

export default function Login({}: { params: { locale: string } }) {
  // TODO: Code a login page once design is finalised
  redirect(`/api/auth/signin`);
}
