'use client';

import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/firebase/client';
import { Button } from '@/components/ui/button';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);

      await fetch('/api/logout', {
        method: 'POST',
      });

      window.location.href = '/sign-in';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Button
        onClick={handleLogout}
        className="text-red-500 text-xl bg-transparent hover:bg-transparent hover:cursor-pointer"
        >
        Logout
        </Button>
  );
};

export default Logout;
