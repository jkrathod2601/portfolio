function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
      </div>
      <div>
        <div className="rounded-md border border-slate-800 p-6 transition-all hover:bg-slate-800/50">
          <h3 className="text-lg font-semibold text-slate-200">BE in Computer Science</h3>
          <p className="text-slate-400">Government Engineering College, Bhavnagar</p>
          <p className="text-sm text-slate-500 mt-1">July 2018 - May 2022</p>
          <p className="text-sm text-slate-500 mt-1">CGPA: 8.51/10</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
