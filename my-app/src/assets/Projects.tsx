import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

function Projects() {
    const [currentPage, setCurrentPage] = useState(0);
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
        title: 'OpsGuard', // Secure contract upload, smart search, template generator. Automated email reminders, e signature integration (DocuSign API). Audit trail, clause extraction using NLP. Role-based access, legal calendar, export to PDF/Word, invoice-sidecar.
        description: 'A distributed observability suite designed to monitor production microservices. Features synthetic monitoring, real-time alerting, and an automated self-healing script that restarts failing Docker containers.',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX9N5wDg1qD4fPzJ0tSMWYzw__6vZ_xUVtfTEZBNyFN0jl6Jjh-3SDeRiuBNmdt49-6M",
        tags: ['Docker', 'Kubernetes', 'Grafana', 'Terraform'],
        github: '#',
        live: '#'
        },
        {
        title: 'SmartRoute',
        description: 'An AI-driven microservice that optimizes notification delivery. Uses Vector Embeddings to detect spam patterns and semantic analysis to route urgent messages to SMS and low-priority ones to Email.',
        image:"",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
         },
        {
        title: 'MergeMind ', 
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
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Freamer Motion'],
        github: '#',
        live: '3'
        },
        {
        title: 'Web3', // mobile aap  Scan pantry via camera/QR, gets real‑time inventory; suggests recipes based on what you have, your diet, local deals; auto‑generates shopping list.  AI expense splitter  inventory manager 
        description: 'TBD',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2SCg3wtHJNSiauBeX3F4XPgrVE161BiC_A&s",
        tags: ['/'],
        github: '#',
        live: '#'
        },
        {
        title: 'CineGuessr',
        description: 'An interactive movie trivia application that integrates with the TMDB API to fetch real-time metadata. Features complex state management for scoring logic, debounced search implementation, and a responsive, gamified user interface.', // DevOps-2
        image:"https://store-images.microsoft.com/image/apps.34621.9007199266556636.b4551e45-9512-4393-b3d5-b216b82715e8.737bac45-dc54-48bd-854e-c9894fbc66bd?h=1280",
        tags: ['React', 'Node.js', 'TMBD API', 'Typescript', 'REST APIs', 'Tailwind CSS', 'Game Logic'],
        github: '#',
        live: '4'
        },
        {
        title: 'My Personel Travel Blog',
        description: 'A high-performance static blog utilizing a headless architecture. Implements a custom Markdown rendering pipeline with syntax highlighting, file-system based routing, and optimized image loading for near-instant page transitions.',
        image:"https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg",
        tags: ['React', 'Markdown', 'Tailwind CSS', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'Text-to-SQL Generator',
        description: 'A Generative AI tool designed to democratize database access for non-technical users. Leverages LLMs to parse natural language queries and transpile them into syntactically correct SQL commands, featuring error handling and syntax validation.',
        image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
        tags: ['React', 'NLP', 'Prompt', 'Typescript', 'OpenAI API'],
        github: '5',
        live: '#'
        },
        {
        title: 'Sentiment Review Analyzer',
        description: 'A Data Science pipeline that processes raw customer feedback to extract actionable insights. Utilizes Natural Language Processing (NLP) libraries to tokenize text and classify sentiment polarity (positive/negative) with high accuracy.', // Web3- 1
        image:"https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        tags: ['React', 'Python', 'Pandas', 'Data Visualization', 'NLTK'],
        github: '6',
        live: '#'
        }
    ];

    const projectsPerPage=6;
    const totalPages = Math.ceil(projects.length / projectsPerPage)
    const currentProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    function nextPage() {
        setCurrentPage((prev) => (prev+1) % totalPages);
    }

    function prevPage() {
        setCurrentPage((prev) => (prev-1+totalPages) % totalPages);
    }
    return (
    <section id="projects" className="py-24 bg-[#3a3a3a]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-white mb-4 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Projects Grid - 3 columns x 2 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {currentProjects.map((project, index) => (
                <div key={index} className="bg-[#3a3a3a] border border-[#2a2a2a] hover:border-gray-400 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-white mb-3 tracking-wide">{project.title}</h3>
                    <p className="text-gray-200 mb-4 leading-relaxed font-light text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-gray-300 text-xs font-light tracking-wide border-b border-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-light tracking-wide text-xs"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-light tracking-wide text-xs"
                      >
                        <ExternalLink size={14} />
                        <span>LIVE</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevPage}
                className="p-3 border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-full"
                disabled={currentPage === 0}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                className="p-3 border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-full"
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
