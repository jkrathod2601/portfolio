const iconMap = {
  JavaScript: 'javascript',
  Python: 'python',
  Java: 'openjdk',
  SQL: 'mysql',
  HTML: 'html5',
  CSS: 'css3',
  'Data Structures & Algorithms': '',
  'React JS': 'react',
  NodeJS: 'nodedotjs',
  Flutter: 'flutter',
  'Express JS': 'express',
  'Azure Open AI': 'azureopenai',
  'REST API': 'api',
  GraphQL: 'graphql',
  'Power BI': 'powerbi',
  'Power Automate': 'powerautomate',
  'Power Apps': 'powerapps',
  'Phidata (Agentic Framework)': '',
  'Cloud Functions': '',
  Redis: 'redis',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  'Cosmos DB': 'cosmosdb',
  'Problem-solving': '',
  Communication: '',
  Troubleshooting: '',
  Analytical: '',
  'Ability To Manage': '',
};

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
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col sm:flex-row sm:items-baseline gap-3">
              <h3 className="font-mono text-caption uppercase tracking-wider text-ink/40 shrink-0 w-52">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-pill bg-white dark:bg-surface-soft text-ink px-3.5 py-1.5 text-body-sm border border-hairline cursor-default"
                  >
                    {iconMap[item] && (
                      <img
                        src={`https://cdn.simpleicons.org/${iconMap[item]}`}
                        alt=""
                        className="h-4 w-4 shrink-0"
                        loading="lazy"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    )}
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
