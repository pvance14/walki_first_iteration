import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/cn';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'Demo', path: '/demo' },
  { label: 'Showcase', path: '/showcase' },
];

const activeClass = 'bg-slate-900 text-white';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-slate-900">
          Walki
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-3 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100',
                location.pathname === link.path && activeClass,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav id="mobile-nav" className={cn('border-t border-slate-200 md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="grid grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex min-h-11 items-center justify-center px-2 py-3 text-xs font-medium text-slate-700',
                location.pathname === link.path && 'bg-slate-900 text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
