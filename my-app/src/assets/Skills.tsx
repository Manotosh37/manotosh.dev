const topSkills = [
  "TypeScript", "React.js", "Node.js", "Docker", "AWS", "PostgreSQL", 
  "MongoDB", "Python", "Tailwind CSS", "Vercel", "JWT", "REST APIs", 
  "Git", "Express.js", "HTML"
];

const bottomSkills = [
  "JavaScript", "FastAPI", "Bootstrap", "Vite", "EC2", "S3", 
  "CI/CD", "GitHub Actions", "Redis", "MySQL", "Prisma ORM", 
  "OAuth 2.0", "Postman", "Material-UI", "CloudFront", "CSS"
];

function Skills() {
  return (
    <section id="skills" className="py-12 bg-[#0a0908] relative overflow-hidden">
      
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.25] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
      ></div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-1 {
          display: flex;
          white-space: nowrap;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-2 {
          display: flex;
          white-space: nowrap;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-1:hover, .animate-marquee-2:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Title */}
      <div className="relative z-20 text-center mb-8">
        <h2 className="text-[#b87333] font-mono text-[10px] tracking-[0.5em] uppercase border-y border-[#b87333]/30 py-3 px-8 inline-block shadow-[0_0_30px_rgba(184,115,51,0.05)]">
          TECHNICAL SKILLS
        </h2>
      </div>

      <div className="relative z-20 w-full flex flex-col gap-8 py-6 border-y-[2px] border-double border-[#b87333]/20 bg-black/40 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        
        {/* Layer 1 */}
        <div className="animate-marquee-1 flex items-center">
          {/* Duplicate for infinite loop over 50% width */}
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              {topSkills.map((skill, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="text-[#f4f1eb] font-serif text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.1em] px-8 lg:px-12">
                    {skill}
                  </span>
                  <span className="text-[#b87333] text-xl md:text-2xl animate-pulse">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Layer 2 */}
        <div className="animate-marquee-2 flex items-center">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              {bottomSkills.map((skill, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="text-[#d4cbb8] font-serif italic text-3xl md:text-5xl lg:text-6xl tracking-[0.05em] px-8 lg:px-12">
                    {skill}
                  </span>
                  <span className="text-[#b87333]/60 text-xl md:text-2xl animate-pulse" style={{ animationDelay: '1s' }}>✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Skills;