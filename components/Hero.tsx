import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContentData } from '../types';

interface HeroProps {
  content: ContentData['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Canvas Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Configuration
    const particleCount = width < 768 ? 40 : 80; // Fewer particles on mobile
    const connectionDistance = 150;
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'; // Blue-500 with opacity
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-blue-50">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      
      {/* Overlay Gradient to fade out edges if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-blue-50/80 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
           {/* Badge/Logo placeholder */}
           <div className="flex justify-center mb-6">
             <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-blue-100 text-blue-800 font-semibold animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                KUGUA TECH CROSS-BORDER
             </div>
           </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.15]">
            <span className="text-blue-600 block mb-2">{content.badge}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              {content.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm rounded-lg p-2">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:scale-105 flex items-center gap-2"
            >
              {content.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Floating Abstract UI Elements to simulate "AI" */}
        <div className="mt-16 relative mx-auto max-w-5xl h-64 md:h-80 hidden md:block">
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center z-10">
                 <div className="text-9xl font-bold text-blue-900/5 select-none">AI</div>
              </div>
              
              {/* Animated Curve connecting nodes */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                     <stop offset="50%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                     <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0}} />
                   </linearGradient>
                 </defs>
                 <path d="M0,150 Q400,50 800,150 T1600,150" fill="none" stroke="url(#grad1)" strokeWidth="3" className="animate-pulse opacity-70" />
                 
                 {/* Decorative nodes on the curve */}
                 <circle cx="25%" cy="120" r="4" className="fill-blue-600 animate-ping" />
                 <circle cx="75%" cy="180" r="4" className="fill-cyan-500 animate-ping animation-delay-1000" />
              </svg>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;