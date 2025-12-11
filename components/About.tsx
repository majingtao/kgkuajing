import React from 'react';
import { ContentData } from '../types';

interface AboutProps {
  content: ContentData['intro'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
       {/* Background pattern */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 opacity-20 -skew-x-12 transform origin-top-right"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {content.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {content.stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl blur-xl"></div>
             <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Team working" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-slate-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;