import React from 'react';
import { AlertCircle, CheckCircle, LayoutDashboard, TrendingUp, ShoppingCart, Truck, PieChart } from 'lucide-react';
import { ContentData } from '../types';

interface PainPointsProps {
  content: ContentData['painPoints'];
}

const PainPoints: React.FC<PainPointsProps> = ({ content }) => {
  const icons = [AlertCircle, ShoppingCart, TrendingUp, Truck, PieChart];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Pain Points (Left - Dark) */}
          <div className="lg:w-2/5 bg-slate-700 text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-10 relative z-10 border-l-4 border-slate-400 pl-4">
              {content.titlePain}
            </h3>

            <div className="space-y-8 relative z-10">
              {content.itemsPain.map((item, index) => {
                 const Icon = icons[index % icons.length];
                 return (
                  <div key={index} className="flex gap-4 group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shrink-0 group-hover:bg-slate-500 transition-colors">
                      <Icon className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-100">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                 )
              })}
            </div>
          </div>

          {/* Solutions (Right - Light) */}
          <div className="lg:w-3/5 bg-white p-12">
            <h3 className="text-2xl font-bold mb-10 text-slate-900 border-l-4 border-blue-600 pl-4">
              {content.titleSolution}
            </h3>

            <div className="grid sm:grid-cols-2 gap-8">
              {content.itemsSolution.map((solution, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-slate-100">
                  <div className="mb-4 text-blue-600">
                    {index === 0 && <LayoutDashboard className="w-6 h-6" />}
                    {index === 1 && <TrendingUp className="w-6 h-6" />}
                    {index === 2 && <ShoppingCart className="w-6 h-6" />}
                    {index === 3 && <PieChart className="w-6 h-6" />}
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 mb-4">{solution.title}</h4>
                  <ul className="space-y-2">
                    {solution.items.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {content.cta}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;