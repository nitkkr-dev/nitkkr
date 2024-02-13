import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/prisma/prismClinet';

// Define your API route handler
export default async function handler(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id'); // Get the id from the request parameters

  // Fetch the student data based on the id
  const student = await prisma.students.findUnique({
    where: {
      id: Number(id),
    },
  });

  // Return the student data as the response
  return new NextResponse(JSON.stringify(student), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
