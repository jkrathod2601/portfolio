const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer · Adani Enterprises Ltd',
    location: 'Ahmedabad',
    period: 'July 2022 – Present',
    points: [
      'Architected and developed a centralized intranet application supporting 30,000+ employees daily across multiple business units',
      'Led end-to-end solution design encompassing scalable backend services, frontend systems, Azure cloud infrastructure, disaster recovery (DR), and database replication strategies',
      'Boosted API performance using Redis caching, indexing strategies, and query optimization to maintain response times below 150–200ms',
      'Integrated RBAC, real-time notifications, and organization-wide collaboration features to streamline internal communication workflows',
      'Connected 20+ enterprise and third-party services, including MakeMyTrip, via OAuth 2.0, secure REST APIs, and middleware integrations',
      'Established CI/CD pipelines, deployment automation, and infrastructure management using Azure DevOps',
      'Built and deployed a multi-agent AI system using LangChain and Phidata to automate multimodal business workflows, reducing task resolution time by 40–50%',
      'Engineered MCP-based AI orchestration services with RBAC, Redis caching, and optimized prompt execution, cutting AI operational costs by 35–40%',
      'Streamlined internal workflows using Power Apps, Power Automate, and Microsoft Copilot with complex approval automation, reducing delivery timelines by 3–4 months',
      'Part of the architecture team responsible for designing scalable and highly available cloud infrastructure, deployment strategies, and system architecture for applications',
      'Currently leading and managing multiple concurrent projects while mentoring a team of 4 developers across frontend, backend, cloud, and AI initiatives',
    ],
    tech: ['Azure', 'LangChain', 'Phidata', 'React JS', 'Node JS', 'Redis', 'Azure DevOps', 'Power Platform', 'MCP'],
  },
  {
    id: 2,
    title: 'Software Development Intern · Cybercom Creations',
    location: 'Ahmedabad',
    period: 'Jan 2022 – May 2022',
    points: [
      'Built a Node.js productivity utility that automated authentication scaffolding, migrations, and routing workflows, enabling faster project setup',
    ],
    tech: ['Node JS', 'Express JS', 'JavaScript'],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-section px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-eyebrow uppercase text-ink/40 mb-4">
          Experience
        </p>
        <div className="border-l-2 border-hairline ml-3 pl-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <span className="absolute -left-[39px] top-1.5 w-3 h-3 bg-ink rounded-full ring-4 ring-canvas" />
              <h3 className="text-headline">{exp.title}</h3>
              <p className="text-body-sm text-ink/40 mt-1">{exp.period} · {exp.location}</p>
              <ul className="mt-4 space-y-2 text-body text-ink/70">
                {exp.points.map((point, i) => (
                  <li key={i} className="list-disc list-inside">{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <span key={t} className="rounded-pill bg-white/70 text-ink/70 px-3 py-1 text-body-sm">
                    {t}
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

export default Experience;
