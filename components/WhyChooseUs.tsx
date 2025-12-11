import React from 'react';
import { UserCheck, Layers, Cpu, HeartHandshake } from 'lucide-react';
import { ContentData } from '../types';

interface WhyChooseUsProps {
  content: ContentData['whyUs'];
}

const iconMap: Record<string, React.ElementType> = {
  'UserCheck': UserCheck,
  'Layers': Layers,
  'Cpu': Cpu,
  'HeartHandshake': HeartHandshake
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{content.sectionTitle}</h2>
          <p className="text-slate-500">{content.sectionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {content.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                   {Icon && <Icon className="w-8 h-8 text-blue-600" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 text-center mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;