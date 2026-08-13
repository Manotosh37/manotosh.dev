import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

function Projects() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
        title: 'NotiPilot Core',
        description: 'A high-throughput notification orchestration engine capable of routing thousands of concurrent messages across Email, SMS, and Slack via a unified API. Features intelligent retry logic and provider failover.',
        image:"https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
        tags: ['Redis', 'Node.js', 'MongoDB', 'SystemDesign', 'React.js'],
        github: '1',
        live: '#'
        },
        {
        title: 'OpsGuard',
        description: 'A distributed observability suite designed to monitor production microservices. Features synthetic monitoring, real-time alerting, and an automated self-healing script that restarts failing Docker containers.',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX9N5wDg1qD4fPzJ0tSMWYzw__6vZ_xUVtfTEZBNyFN0jl6Jjh-3SDeRiuBNmdt49-6M",
        tags: ['Docker', 'Kubernetes', 'Grafana', 'Terraform'],
        github: '#',
        live: '#'
        },
        {
        title: 'SmartRoute',
        description: 'An AI-driven microservice that optimizes notification delivery. Uses Vector Embeddings to detect spam patterns and semantic analysis to route urgent messages to SMS and low-priority ones to Email.',
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'MergeMind', 
        description: 'An automated code review bot integrated into GitHub Actions. It analyzes Pull Request diffs using LLMs to detect bugs, enforce style guides, and provide performance optimization suggestions automatically.',
        image:"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
        tags: ['GitHub API', 'Node.js', 'Webhooks', 'OpenAI', 'CI/CD'],
        github: '#',
        live: '2'
        },
        {
        title: 'VibeWall',
        description: 'A high-fidelity testimonial collection SaaS. Features a pixel-perfect masonry layout with entrance animations and a custom vanilla JS embed script that allows third-party websites to inject the widget seamlessly.',
        image:"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
        github: '#',
        live: '3'
        },
        {
        title: 'Web3 / TBD',
        description: 'A cutting-edge exploration into decentralized applications and smart contract architecture.',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2SCg3wtHJNSiauBeX3F4XPgrVE161BiC_A&s",
        tags: ['Web3', 'Blockchain'],
        github: '#',
        live: '#'
        },
        {
        title: 'CineGuessr',
        description: 'An interactive movie trivia application that integrates with the TMDB API to fetch real-time metadata. Features complex state management for scoring logic, debounced search implementation, and a responsive, gamified user interface.',
        image:"https://store-images.microsoft.com/image/apps.34621.9007199266556636.b4551e45-9512-4393-b3d5-b216b82715e8.737bac45-dc54-48bd-854e-c9894fbc66bd?h=1280",
        tags: ['React', 'Node.js', 'TMBD API', 'Typescript', 'REST APIs', 'Tailwind CSS'],
        github: '#',
        live: '4'
        },
        {
        title: 'Personal Travel Blog',
        description: 'A high-performance static blog utilizing a headless architecture. Implements a custom Markdown rendering pipeline with syntax highlighting, file-system based routing, and optimized image loading for near-instant page transitions.',
        image:"https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg",
        tags: ['React', 'Markdown', 'Tailwind CSS', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'Text-to-SQL Generator',
        description: 'A Generative AI tool designed to democratize database access for non-technical users. Leverages LLMs to parse natural language queries and transpile them into syntactically correct SQL commands.',
        image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        tags: ['React', 'NLP', 'Prompt', 'Typescript', 'OpenAI API'],
        github: '5',
        live: '#'
        },
        {
        title: 'Sentiment Review Analyzer',
        description: 'A Data Science pipeline that processes raw customer feedback to extract actionable insights. Utilizes Natural Language Processing (NLP) libraries to tokenize text and classify sentiment polarity.',
        image:"https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        tags: ['React', 'Python', 'Pandas', 'Data Visualization', 'NLTK'],
        github: '6',
        live: '#'
        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
    <section id="projects" className="py-12 bg-[#0a0908] relative overflow-hidden">
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.25] mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
      ></div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-[90rem] mx-auto">
          
          {/* Cinematic Header & Controls */}
          <div className="flex justify-between items-center mb-8 px-4">
             <h2 className="text-[#b87333] font-mono text-[10px] tracking-[0.5em] uppercase border-y border-[#b87333]/30 py-3 px-8 inline-block shadow-[0_0_30px_rgba(184,115,51,0.05)]">
                PROJECTS
             </h2>

             {/* Arrow Navigation */}
             <div className="hidden md:flex space-x-4">
                 <button onClick={scrollLeft} className="p-3 text-[#7a766c] hover:text-[#d4cbb8] transition-colors border border-[#2a2622] rounded-full hover:border-[#b87333]/50 bg-[#050505]">
                    <ChevronLeft size={20} strokeWidth={1.5} />
                 </button>
                 <button onClick={scrollRight} className="p-3 text-[#7a766c] hover:text-[#d4cbb8] transition-colors border border-[#2a2622] rounded-full hover:border-[#b87333]/50 bg-[#050505]">
                    <ChevronRight size={20} strokeWidth={1.5} />
                 </button>
             </div>
          </div>
          
          <div className="relative -mx-6 px-6">
            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 hide-scrollbar scroll-smooth"
            >
              {projects.map((project, index) => (
                <div key={index} className="w-[85vw] sm:w-[400px] lg:w-[420px] shrink-0 snap-start bg-[#050505] border border-[#2a2622] hover:border-[#b87333]/50 transition-all duration-500 group flex flex-col rounded-sm overflow-hidden shadow-2xl">
                  
                  {/* Cinematic Image Frame */}
                  <div className="aspect-video overflow-hidden relative border-b border-[#2a2622]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out filter grayscale sepia-[0.3] brightness-75 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 pointer-events-none"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif text-[#f4f1eb] mb-3 tracking-wide">{project.title}</h3>
                    <p className="text-[#7a766c] mb-6 leading-relaxed font-light text-sm flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[#b87333] text-[10px] font-mono tracking-widest uppercase border border-[#b87333]/20 px-2 py-1 bg-[#b87333]/5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-6 pt-4 border-t border-[#2a2622] mt-auto">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300 font-mono tracking-widest text-[10px] uppercase"
                      >
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300 font-mono tracking-widest text-[10px] uppercase"
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile swipe hint */}
            <div className="absolute bottom-2 left-0 w-full flex justify-center md:hidden">
              <span className="text-[#7a766c] font-mono text-[8px] uppercase tracking-widest animate-pulse">Swipe to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
