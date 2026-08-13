import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

function Footer() {
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <footer className="bg-[#0a0908] py-8 relative z-50">
            <div className="container mx-auto px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Copyright & Logo */}
                    <div className="flex items-center gap-4 text-[#7a766c] text-[10px] font-mono tracking-[0.3em] uppercase">
                        <span className="text-[#d4cbb8] font-serif italic text-sm normal-case tracking-widest">manotosh.dev</span>
                        <span>© 2026</span>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center space-x-8">
                        <a href="https://github.com/Manotosh3" className="text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300">
                            <Github size={16} strokeWidth={1.5} />
                        </a>
                        <a href="https://www.linkedin.com/in/manotosh-kumar-phade-321b6226b/" className="text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300">
                            <Linkedin size={16} strokeWidth={1.5} />
                        </a>
                        <a href="https://x.com/manotosh_phade" className="text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300">
                            <Twitter size={16} strokeWidth={1.5} />
                        </a>
                        <a href="mailto:manotoshphade3@gmail.com" className="text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300">
                            <Mail size={16} strokeWidth={1.5} />
                        </a>
                    </div>

                    {/* Back to top */}
                    <button onClick={scrollToTop} className="flex items-center gap-3 text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300 group">
                        <span className="text-[9px] tracking-[0.4em] uppercase font-mono">Top</span>
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
                    </button>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;