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
    <section id="skills" className="py-section px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-eyebrow uppercase text-ink/40 mb-8">
          Skills &amp; Expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[16px] bg-surface-soft p-6">
              <h3 className="font-mono text-caption uppercase tracking-wider text-ink/40 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-pill bg-white text-ink px-3.5 py-1.5 text-body-sm border border-hairline cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
