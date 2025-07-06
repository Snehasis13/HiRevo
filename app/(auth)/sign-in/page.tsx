import Authform from '@/components/Authform';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <Authform type="sign-in" />
    </div>
  );
};

export default page;
