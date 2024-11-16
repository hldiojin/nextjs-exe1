'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
        <li>
          <Link href="/" passHref>
            <span style={{ color: pathname === '/' ? '#4CAF50' : '#fff', textDecoration: 'none' }}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span style={{ color: pathname === '/about' ? '#4CAF50' : '#fff', textDecoration: 'none' }}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <span style={{ color: pathname === '/contact' ? '#4CAF50' : '#fff', textDecoration: 'none' }}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;