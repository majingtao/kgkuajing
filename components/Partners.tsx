import React from 'react';
import { ContentData } from '../types';

interface PartnersProps {
  content: ContentData['partners'];
}

const Partners: React.FC<PartnersProps> = ({ content }) => {
  // Placeholder placeholders for logos
  const partners = [
    "GreatStar", "PeopleElectric", "Bull", "Romoss", "AirTac",
    "MyBaby", "Grace", "Fotile", "HuiGuang", "HKAirport"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">{content.sectionTitle}</h2>
        <p className="text-slate-500 mb-12">{content.sectionSubtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white h-24 rounded-lg border border-slate-100 flex items-center justify-center hover:shadow-md transition-shadow group">
              <span className="text-lg font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
           <button className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
             See More Cases
           </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;