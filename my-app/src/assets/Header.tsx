import { useState, useEffect } from 'react'

function Header() { 
    const [, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId)
        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        setIsMenuOpen(false);
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
            ${isScrolled ? 'bg-[#0a0908]/90 backdrop-blur-md border-b border-[#2a2622]' : 'bg-transparent'}`}
        >  
            <div className='container mx-auto px-8 py-6 max-w-7xl'>
                <nav className='flex items-center justify-between'>
                    <div className='text-xl font-serif text-[#f4f1eb] tracking-widest'>
                        manotosh.dev
                    </div>
                    <div className='hidden md:flex items-center space-x-10'>
                        {['Home', 'Projects', 'Skills'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className='text-[#7a766c] hover:text-[#d4cbb8] transition-colors duration-300 font-mono tracking-[0.2em] text-[10px] uppercase'
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;