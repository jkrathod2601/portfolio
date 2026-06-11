const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'Data Structures & Algorithms'],
  },
  {
    title: 'Technologies/Frameworks',
    items: ['React JS', 'NodeJS', 'Flutter', 'Express JS', 'Azure Open AI', 'REST API', 'GraphQL', 'Power BI', 'Power Automate', 'Power Apps', 'Phidata (Agentic Framework)', 'Cloud Functions'],
  },
  {
    title: 'Databases',
    items: ['Redis', 'MySQL', 'MongoDB', 'Cosmos DB'],
  },
  {
    title: 'Soft Skills',
    items: ['Problem-solving', 'Communication', 'Troubleshooting', 'Analytical', 'Ability To Manage'],
  },
];

function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
      </div>
      <div>
        {skillGroups.map((group) => (
          <div key={group.title} className="mb-8">
            <h3 className="text-lg font-semibold text-slate-300 mb-3">{group.title}</h3>
            <div className="flex flex-wrap" aria-label={group.title}>
              {group.items.map((item) => (
                <div key={item} className="mr-2 mt-2">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
