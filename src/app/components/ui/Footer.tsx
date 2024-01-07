import Link from 'next/link';
import React from 'react'
import FooterIcons from '@/app/components/ui/FooterIcons';

const Footer = () => {
  return (
    <footer className="bg-primary p-4 flex flex-col md:flex-row justify-between items-center ">
      <span className="text-white mb-2 md:mb-0">
        PulseCheck | Made with <span className="text-red-500">&#10084;</span> by{' '}
        <Link className='font-semibold italic' href="https://github.com/louispawaon">
            @louispawaon
        </Link>
      </span>
      <FooterIcons/>
    </footer>
  );
}

export default Footer