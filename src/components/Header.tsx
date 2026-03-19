'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mounted] = useState(false);

  // Use false to ensure client-side rendering from the start
  // This prevents hydration mismatch and ensures proper routing

  if (!mounted) {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/listings', label: 'Listings' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            🏠 DreamHome Realty
          </Link>
          <nav className="nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
