import Git from 'react-github-calendar';

function GitCal() {
    return (
        <section className="py-12 bg-[#0a0908] relative overflow-hidden">
            {/* Cinematic Film Grain Overlay */}
            <div 
                className="absolute inset-0 z-10 pointer-events-none opacity-[0.25] mix-blend-overlay" 
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}
            ></div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    
                    {/* Cinematic Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-[#b87333] font-mono text-[10px] tracking-[0.5em] uppercase border-y border-[#b87333]/30 py-3 px-8 inline-block shadow-[0_0_30px_rgba(184,115,51,0.05)]">
                            GITHUB CONTRIBUTIONS
                        </h2>
                    </div>

                    <div className="w-full bg-[#050505] p-10 rounded-sm border border-[#2a2622] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
                        {/* Subtle vintage frame lines */}
                        <div className="absolute inset-2 border border-[#e5e1d8]/5 pointer-events-none"></div>
                        
                        <div className="overflow-x-auto flex justify-center pb-4">
                            <Git 
                                username="Manotosh37" 
                                colorScheme="dark" 
                                theme={{
                                    dark: ['#11100e', '#3a2718', '#6b4624', '#a66826', '#d4cbb8']
                                }}
                                fontSize={10} 
                                blockSize={14} 
                                blockMargin={4} 
                                hideColorLegend={false} 
                                hideTotalCount={false}
                            />
                        </div>
                    </div>
                </div>

                <style>{`
                    .react-github-calendar {
                        color: #9c978d !important;
                        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
                        letter-spacing: 0.1em;
                    }
                    .react-github-calendar text {
                        fill: #7a766c !important; 
                    }
                    .react-github-calendar .react-github-calendar-legend {
                        color: #7a766c !important;
                    }
                `}</style>
            </div>
        </section>
    )
}

export default GitCal;