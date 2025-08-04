// app/api/logout/route.ts
import { NextResponse } from 'next/server';
import { signOut } from '@/lib/actions/auth.action';

export async function POST() {
  await signOut();

  return NextResponse.json({ success: true });
}

// checking db connection pool
// TODO: optimize this function for performance
// checking db connection pool
// TODO: optimize this function for performance
 
// refactored for better readability
// secure token handling
// optimized for voice latency
// updated api endpoint
// cached result
// refactored for better readability