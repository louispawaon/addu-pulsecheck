import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex items-center justify-center">
        <Link className="text-white text-2xl font-bold" href="/">
          PulseCheck
        </Link>
      </div>
    </nav>
  );
}

export default Navbar