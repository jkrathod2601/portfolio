import { useState } from 'react';

function Education() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="education" className="py-section px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-eyebrow uppercase text-ink/40 mb-4">
          Education
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-headline">BE in Computer Science</h3>
            <p className="text-body text-ink/60 mt-1">Government Engineering College, Bhavnagar</p>
            <div className="flex items-center gap-4 mt-3 flex-wrap">
              <span className="text-body-sm text-ink/40">July 2018 - May 2022</span>
              <span className="rounded-pill bg-surface-soft px-3 py-0.5 text-body-sm text-ink">CGPA: 8.51/10</span>
            </div>
            {showMore && (
              <div className="mt-4 text-body-sm text-ink/50 space-y-2 animate-reveal-up">
                <p>Relevant coursework: Data Structures, Algorithms, Database Management, Computer Networks, Software Engineering, Machine Learning</p>
              </div>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-3 text-body-sm text-ink/40 hover:text-ink transition-colors font-mono uppercase tracking-wider"
            >
              {showMore ? '— Less' : '+ More'}
            </button>
          </div>
          <div className="space-y-4">
            <div className="rounded-[16px] bg-surface-soft p-5">
              <p className="font-mono text-caption uppercase text-ink/30 mb-1">Key Focus</p>
              <p className="text-body-sm text-ink/60">Full-stack development, AI/LLM systems, cloud architecture, system design</p>
            </div>
            <div className="rounded-[16px] bg-surface-soft p-5">
              <p className="font-mono text-caption uppercase text-ink/30 mb-1">Certifications</p>
              <p className="text-body-sm text-ink/60">Azure AI Fundamentals · Microsoft Power Platform · Data Structures (NPTEL)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
