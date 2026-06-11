function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          A Full Stack Developer with deep expertise in building LLM-based applications, SQL wizardry, and creating intelligent AI-driven automations. I thrive on architecting and implementing robust, scalable solutions from the ground up.
        </p>
        <p className="mb-4">
          My experience ranges from developing Retrieval-Augmented Generation (RAG) systems that reduce manual work by over 50%, to integrating generative AI features into portals used by over 30,000 users. I&apos;m passionate about leveraging technology to create tangible business impact and enhance user experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
