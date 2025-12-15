'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// 1. Define the shape of your props
interface NavLinkProps {
  path: string;
  children: ReactNode;
}

function NavLink({ path, children }: NavLinkProps) {
  const pathname = usePathname();

  // Helper logic for active state
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`block py-2 hover:text-secondary-900 transition-all ease-out ${
        isActive ? 'text-primary-900 font-bold' : 'text-secondary-500'
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
