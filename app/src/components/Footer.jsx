function Footer() {
  return (
    <footer className="bg-inverse-canvas text-inverse-ink py-section px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-link font-bold">Jay Rathod</p>
            <p className="font-mono text-caption uppercase text-inverse-ink/40 mt-2">
              Full Stack Developer
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:jkrathod2601@gmail.com" className="w-10 h-10 rounded-full bg-on-inverse-soft flex items-center justify-center hover:bg-white/30 transition-colors" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
            </a>
            <a href="https://github.com/jkrathod2601" target="_blank" rel="noreferrer noopener" className="w-10 h-10 rounded-full bg-on-inverse-soft flex items-center justify-center hover:bg-white/30 transition-colors" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.165 6.839 9.48.5.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.159-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.088 2.906.832.09-.645.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.38.202 2.398.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.843-2.339 4.687-4.566 4.935.359.308.678.915.678 1.846 0 1.334-.012 2.41-.012 2.73 0 .268.18.579.688.482C20.137 20.165 23 16.419 23 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jay-rathod-2601/" target="_blank" rel="noreferrer noopener" className="w-10 h-10 rounded-full bg-on-inverse-soft flex items-center justify-center hover:bg-white/30 transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-caption uppercase text-inverse-ink/30">
            &copy; {new Date().getFullYear()} Jay Rathod
          </p>
          <p className="font-mono text-caption uppercase text-inverse-ink/30">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
