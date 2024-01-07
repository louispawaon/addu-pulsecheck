import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/PulseCheck.png" alt={'PulseCheck Logo'} width={36} height={36}/>
          {/* PulseCheck Text */}
          <Link href="/" className="text-white text-4xl font-bold">
            PulseCheck
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar