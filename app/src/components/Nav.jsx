import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const sections = ['About', 'Skills', 'Experience', 'Education', 'Projects'];

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className="sticky top-0 z-40 bg-canvas border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-14 flex items-center justify-between">
        <a href="/" className="text-link font-bold tracking-tight">
          Jay Rathod
        </a>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link py-1">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full bg-surface-soft flex items-center justify-center hover:bg-hairline transition-colors relative z-50"
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
          <a
            href="mailto:jkrathod2601@gmail.com"
            className="hidden md:inline rounded-pill bg-inverse-canvas text-inverse-ink px-4 py-1 text-body-sm hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-40 md:hidden bg-canvas flex flex-col items-center justify-center gap-8 animate-fade-in">
          {sections.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-display-lg text-ink/80 hover:text-ink transition-colors"
              style={{ animation: `reveal-up 0.5s ease-out ${i * 0.08}s forwards`, opacity: 0 }}
            >
              {item}
            </a>
          ))}
          <div style={{ animation: `reveal-up 0.5s ease-out ${sections.length * 0.08 + 0.1}s forwards`, opacity: 0 }}>
            <a
              href="mailto:jkrathod2601@gmail.com"
              onClick={() => setOpen(false)}
              className="rounded-pill bg-inverse-canvas text-inverse-ink px-8 py-3 text-button hover:opacity-90 transition-opacity mt-4"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
