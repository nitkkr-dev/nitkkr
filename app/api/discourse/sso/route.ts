import crypto from 'crypto';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

import { authOptions } from '@/api/auth/auth';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', {
      status: 400,
    });
  }
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);
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
  console.log(hmac);
  const calculatedSig = hmac.digest('hex');
  console.log(calculatedSig);
  if (calculatedSig !== sig) {
    return new Response('Invalid signature', {
      status: 401,
    });
  }
  const payloadData = Buffer.from(payload, 'base64').toString('ascii');
  const parsedPayload = new URLSearchParams(payloadData);
  const nonce = parsedPayload.get('nonce');
  const return_sso_url = parsedPayload.get('return_sso_url');
  
  console.log('Nonce:', nonce);
  console.log('Return SSO URL:', return_sso_url);
  
  const discoursePayload = {
    nonce: nonce,
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

  const redirectUrl = `${return_sso_url}?sso=${base64Payload}&sig=${calculatedSigPayload}`;
  redirect(redirectUrl);
}