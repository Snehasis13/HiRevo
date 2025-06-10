// app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { signOut } from '@/lib/actions/auth.action';

export async function POST() {
  await signOut();

  return NextResponse.json({ success: true });
}

// checking db connection pool
// TODO: optimize this function for performance