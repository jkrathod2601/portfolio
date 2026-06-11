const experiences = [
  {
    id: 1,
    title: 'Software Development Engineer · Adani Enterprises Ltd',
    period: 'Jul 2022 - Present',
    points: [
      'Developed LLM-based RAG application with agentic AI, reducing manual review time by 25-30%.',
      'Integrated generative AI features into an NFA portal serving 30,000+ users, enhancing automation and performance.',
      'Architected and developed a high-performance web portal for Group IT with AD authentication and role-based access.',
      'Created complex problem-solving solutions on Microsoft Power Platform, driving business process automation.',
    ],
    tech: ['Azure Open AI', 'Phidata', 'React JS', 'Node JS', 'Power Platform', 'Cosmos DB'],
  },
  {
    id: 2,
    title: 'Intern · Cybercom Creations',
    period: 'Jan 2022 - Jun 2022',
    points: [
      'Created a developer tool for NodeJS with automatic authentication and routing to boost productivity and reduce repetitive tasks.',
    ],
    tech: ['Node JS', 'Express JS', 'JavaScript'],
  },
];

function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
      </div>
      <div>
        <ol className="relative border-l border-slate-700 ml-2">
          {experiences.map((exp) => (
            <li key={exp.id} className="mb-10 ml-6 timeline-item">
              <span className="absolute flex items-center justify-center w-3 h-3 bg-sky-400 rounded-full -left-1.5 top-1.5" />
              <h3 className="text-lg font-semibold text-slate-200">{exp.title}</h3>
              <p className="block mb-2 text-sm font-normal leading-none text-slate-500">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap" aria-label="Technologies used">
                {exp.tech.map((t) => (
                  <div key={t} className="mr-2 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                      {t}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
