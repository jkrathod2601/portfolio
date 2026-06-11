function Marquee() {
  const techs = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Azure OpenAI',
    'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker',
    'Kubernetes', 'LangChain',
    'React', 'Node.js', 'Python', 'TypeScript', 'Azure OpenAI',
    'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker',
    'Kubernetes', 'LangChain',
  ];

  return (
    <div className="h-8 bg-ink/5 border-y border-hairline-soft flex items-center overflow-hidden">
      <div className="marquee-content">
        {techs.map((tech, i) => (
          <span key={i} className="text-caption font-mono uppercase tracking-wider text-ink/30">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
