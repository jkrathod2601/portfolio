import LiquidEther from './LiquidEther.tsx'

function Hero() {
  return (
    <section className="relative py-section px-6 lg:px-12 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <LiquidEther
          colors={['#A7F3D0', '#C4B5FD', '#FDE68A', '#FCA5A5', '#E0E7FF']}
          mouseForce={25}
          cursorSize={80}
          resolution={0.4}
          autoDemo={true}
          autoSpeed={0.6}
          autoIntensity={2.5}
        />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-eyebrow uppercase text-ink/40 mb-6 animate-reveal-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Full Stack Developer
        </p>
        <h1 className="text-display-xl max-w-4xl">
          <span className="block overflow-hidden">
            <span className="block animate-reveal-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Building intelligent systems
            </span>
          </span>
          <span className="block overflow-hidden mt-1">
            <span className="block animate-reveal-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              with AI
            </span>
          </span>
          <span className="block h-[3px] w-0 bg-ink/20 mt-4 animate-border-draw" style={{ animationDelay: '0.9s' }} />
        </h1>
        <p className="text-subhead max-w-2xl mt-8 text-ink/70 animate-reveal-up" style={{ animationDelay: '1.1s', opacity: 0 }}>
          LLM & AI Automation enthusiast passionate about solving real-world problems 
          with technology. I architect robust, scalable solutions from the ground up.
        </p>
        <div className="flex items-center gap-4 mt-10 animate-reveal-up" style={{ animationDelay: '1.3s', opacity: 0 }}>
          <a
            href="#projects"
            className="rounded-pill bg-inverse-canvas text-inverse-ink px-8 py-3 text-button hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            href="https://github.com/jkrathod2601"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-pill bg-surface-soft text-ink px-8 py-3 text-button hover:bg-hairline transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
