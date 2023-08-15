import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { revalidateTag } from 'next/cache';

export async function GET(req: NextRequest) {
  const headersList = headers();
  const authorization = headersList.get('authorization');
  const token = authorization?.split(' ')?.[1];
  const tag = req.nextUrl.searchParams.get('tag');

  if (
    !tag || typeof process.env.REVALIDATION_TOKEN === 'undefined' || token !== process.env.REVALIDATION_TOKEN
  ) return NextResponse.json({ message: 'Invalid data' }, { status: 400 });

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
