import crypto from 'crypto';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { authOptions } from '@/api/auth/auth';

export async function GET(request: NextRequest) {
  console.log('Its working');
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', {
      status: 400,
    });
  }
  const searchParams = request.nextUrl.searchParams;
  const discourseConnectSecret = process.env.NEXTAUTH_SECRET;
  const payload = searchParams.get('sso') as string | undefined;
  const sig = searchParams.get('sig') as string | undefined;
  if (!payload || !sig) {
    return new Response('Invalid payload or signature', {
      status: 400,
    });
  }

  const hmac = crypto.createHmac(
    'sha256',
    discourseConnectSecret as crypto.BinaryLike
  );
  hmac.update(payload);
  const calculatedSig = hmac.digest('hex');

  if (calculatedSig !== sig) {
    return new Response('Invalid signature', {
      status: 401,
    });
  }

  const discoursePayload = {
    nonce: searchParams.get('nonce'),
    email: session.user?.email,
    external_id: session.user?.email,
    username: session.user?.email,
  };

  const base64Payload = Buffer.from(JSON.stringify(discoursePayload)).toString(
    'base64'
  );

  const hmacPayload = crypto.createHmac(
    'sha256',
    discourseConnectSecret as crypto.BinaryLike
  );
  hmacPayload.update(base64Payload);
  const calculatedSigPayload = hmacPayload.digest('hex');

  const redirectUrl = `http://localhost:4200/session/sso_login?sso=${base64Payload}&sig=${calculatedSigPayload}`;
  redirect(redirectUrl);
}
