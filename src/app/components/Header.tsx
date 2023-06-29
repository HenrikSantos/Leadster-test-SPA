import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex justify-center py-5'>
      <Image className='w-36' src="/images/logo.png" alt="logo" width={100} height={100}/>
    </header>
  );
}
