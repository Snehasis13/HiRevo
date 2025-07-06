'use server'
import { SignUpParams, SignInParams, User } from "@/types";
import {db, auth} from '@/firebase/admin';
import {cookies} from 'next/headers';

const one_week = 60*60*24*7;

export async function signUp(params : SignUpParams){
    const {uid, name, email} = params;

    try{
        const userRecord = await db.collection('users').doc(uid).get();

        if(userRecord.exists){
            return{
                success : false,
                message : 'User already exists. Please sign in.'
            }
        }

        await db.collection("users").doc(uid).set({
            name,
            email,
        });

        return {
            success: true,
            message: "Account created successfully. Please sign in.",
        };
    }catch(e : any){
        console.log('Error creating a user',e);

        if(e.code === 'auth/email-already-exists'){
            return{
                success : false,
                message : 'This email already in use.'
            }
        }

        return{
            success : false,
            message : 'Failed to create an account.'
        }
    }

}

export async function setSessionCookie(idToken : string){
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken,{
        expiresIn : one_week*1000
    })

    cookieStore.set("__session", sessionCookie, {
    maxAge: one_week,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log("");

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("__session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    if (!userRecord.exists) return null;

    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export const isAuthenticated = async () => {
  const sessionCookie = (await cookies()).get('__session')?.value;
  if (!sessionCookie) return false;

  try {
    const decoded = await auth.verifySessionCookie(sessionCookie, true);
    return !!decoded;
  } catch (err) {
    return false;
  }
};

export async function signOut() {
  const cookieStore = await cookies();

  cookieStore.delete("__session");
}

