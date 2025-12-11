import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContentData } from '../types';

interface ProcessProps {
  content: ContentData['process'];
}

const Process: React.FC<ProcessProps> = ({ content }) => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{content.sectionTitle}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{content.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {content.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl font-bold">{item.step}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed px-1">
                {item.description}
              </p>
              
              {/* Connector Line Logic */}
              {index < content.items.length - 1 && (
                 <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-100 -z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;