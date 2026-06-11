const sections = ['About', 'Skills', 'Experience', 'Education', 'Projects'];

function Nav() {
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
          <a
            href="mailto:jkrathod2601@gmail.com"
            className="rounded-pill bg-inverse-canvas text-inverse-ink px-4 py-1 text-body-sm hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
