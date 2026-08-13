import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [timecode, setTimecode] = useState("00:00:00:00");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      const d = new Date();
      const frames = Math.floor(d.getMilliseconds() / 41.66).toString().padStart(2, '0');
      setTimecode(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}:${frames}`);
    }, 41);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="flex items-center justify-center bg-[#0a0908] text-[#e5e1d8] relative pt-32 pb-16 overflow-hidden">
      
      {/* Interactive Mouse Spotlight (Light Leak) */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-all duration-300 ease-out mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(184, 115, 51, 0.08), transparent 50%)`
        }}
      />

      {/* Cinematic HUD Props */}
      <div className="absolute top-[12vh] left-[5vw] z-40 flex items-center gap-2 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
        <span className="text-[10px] tracking-[0.3em] font-mono text-[#b87333]/80">REC</span>
      </div>

      <div className="absolute top-[12vh] right-[5vw] z-40 pointer-events-none hidden md:block">
        <span className="text-[12px] tracking-widest font-mono text-[#b87333]/60">TCR {timecode}</span>
      </div>

      {/* Crosshairs */}
      <div className="absolute top-[25%] left-[20%] text-[#b87333]/15 pointer-events-none hidden lg:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20"/></svg>
      </div>
      <div className="absolute bottom-[30%] right-[15%] text-[#b87333]/15 pointer-events-none hidden lg:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20"/></svg>
      </div>

      {/* Cinematic Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.25] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Cinematic Letterboxing (Top and Bottom black bars) */}
      <div className="absolute top-0 left-0 w-full h-[6vh] bg-black z-40 shadow-[0_10px_20px_rgba(0,0,0,0.8)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[6vh] bg-black z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.8)]"></div>

      <div className="container mx-auto px-8 w-full max-w-7xl z-30">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left: Cinematic Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start w-full relative">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] rounded-sm overflow-hidden group border border-[#2a2622]">
              <img
                src="/pf.jpg"
                alt="Manotosh Kumar Phade"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[3s] ease-out sepia-[.4] contrast-125 brightness-75 hover:brightness-100 hover:sepia-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              
              {/* Subtle vintage frame lines */}
              <div className="absolute inset-4 border border-[#e5e1d8]/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Right: Retro Cinematic Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-12">
            <div className="space-y-6 w-full">
              {/* Movie Credit Subtitle */}
              <div className="inline-block border-b border-[#b87333]/40 pb-2">
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#b87333] font-semibold">
                  A Full Stack & Web3 Production
                </p>
              </div>
              
              {/* Massive Cinematic Name */}
              <h1 className="text-6xl sm:text-7xl lg:text-[6rem] font-serif tracking-tight leading-[1.05] text-[#f4f1eb]">
                Manotosh<br/>
                <span className="italic text-[#d4cbb8]">Kumar Phade.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#9c978d] font-light max-w-xl leading-relaxed tracking-wide">
              Crafting scalable digital solutions and thoughtful user experiences from India. 
              Engineering the intersection of clean code and timeless design.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-10 pt-8 border-t border-[#2a2622] w-full lg:w-3/4">
              <a 
                href='https://docs.google.com/document/d/e/2PACX-1vROiJ1Vlk2PWPOKRwoIIyUXxjCKw4tB590-e4R4PwZ2TN7cOh3fms4dk5tdJ_Sw3o1Rqch5hUhYjB8O/pub'
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-[#b87333]/50 text-[#d4cbb8] font-medium tracking-[0.2em] text-[10px] uppercase hover:bg-[#b87333]/10 transition-colors duration-500"
              >
                Download CV
              </a>
              
              {/* Retro social links */}
              <div className="flex items-center gap-8 z-50">
                {[
                  { icon: Github, href: "https://github.com/Manotosh3" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/manotosh-kumar-phade-321b6226b/" },
                  { icon: Mail, href: "mailto:manotoshphade3@gmail.com" },
                  { icon: Twitter, href: "https://x.com/manotosh_phade" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7a766c] hover:text-[#d4cbb8] transform hover:-translate-y-1 transition-all duration-500 relative z-50 pointer-events-auto"
                  >
                    <social.icon size={22} strokeWidth={1.2} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vintage Frame Detail */}
        <div className="absolute bottom-[10vh] right-12 hidden xl:flex flex-col items-center gap-6">
          <span className="text-[8px] tracking-[0.4em] uppercase text-[#7a766c]" style={{ writingMode: 'vertical-rl' }}>
            EST. 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;