'use client'

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mitLicenseUrl: string = 'https://opensource.org/license/mit/';
  return (
    <footer className='flex flex-wrap justify-center text-sm mb-4'>
      &copy; {currentYear} Andrew Stolzle &bull;&nbsp;<Link href={mitLicenseUrl} as={mitLicenseUrl} className='hover:underline underline-offset-2'>MIT License</Link>
    </footer>
  );
}