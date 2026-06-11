function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              JAY RATHOD
            </span>
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          LLM & AI Automation Enthusiast passionate about solving real-world problems with technology.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {['About', 'Skills', 'Experience', 'Education', 'Projects'].map((item) => (
              <li key={item}>
                <a
                  className="group flex items-center py-3"
                  href={`#${item.toLowerCase()}`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs shrink-0">
          <a href="mailto:jkrathod2601@gmail.com" className="block hover:text-slate-200" title="Email">
            <span className="sr-only">Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a href="https://github.com/jkrathod2601" target="_blank" rel="noreferrer noopener" className="block hover:text-slate-200" title="GitHub">
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.48.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.159-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.906.832.09-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.843-2.339 4.687-4.566 4.935.359.308.678.915.678 1.846 0 1.334-.012 2.41-.012 2.73 0 .268.18.579.688.482C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a href="https://www.linkedin.com/in/jay-rathod-2601/" target="_blank" rel="noreferrer noopener" className="block hover:text-slate-200" title="LinkedIn">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" /></svg>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Sidebar;
