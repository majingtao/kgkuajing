import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { ContentData } from '../types';

interface IntroProps {
  content: ContentData['intro'];
}

const Intro: React.FC<IntroProps> = ({ content }) => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">{content.title}</h2>
          <p className="text-slate-500 mt-2 text-sm">{content.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl">
          {/* Video Placeholder */}
          <div className="lg:w-1/2 w-full relative group cursor-pointer">
            <div className="absolute -inset-2 bg-slate-900 rounded-[2rem] opacity-5 rotate-1"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-slate-800 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Office" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all z-10" />
              <div className="absolute bottom-4 left-4 text-white text-xs font-mono">0:00 / 1:04</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{content.subtitle}</h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-justify">
              {content.description}
            </p>

            <div className="grid grid-cols-4 gap-4 mb-8">
               {content.stats.map((stat, idx) => (
                 <div key={idx} className="text-center">
                   <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                   <div className="text-xs text-slate-500">{stat.label}</div>
                 </div>
               ))}
            </div>

            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              {content.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;