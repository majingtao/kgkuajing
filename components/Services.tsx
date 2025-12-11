import React, { useState } from 'react';
import { ShoppingBag, Video, Globe, Users, ArrowLeft, CheckCircle, ChevronRight, BarChart, Target, ShieldCheck } from 'lucide-react';
import { ContentData, ServiceItem } from '../types';

interface ServicesProps {
  content: ContentData['services'];
}

// Icon Mapping with explicit typing
const iconMap: Record<string, React.ElementType> = {
  'ShoppingBag': ShoppingBag,
  'Video': Video,
  'Globe': Globe,
  'Users': Users
};

// Styling maps
const colorStyles: Record<string, string> = {
  blue: "bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border-blue-100",
  cyan: "bg-cyan-50 hover:bg-cyan-600 text-cyan-600 hover:text-white border-cyan-100",
  orange: "bg-orange-50 hover:bg-orange-600 text-orange-600 hover:text-white border-orange-100",
  purple: "bg-purple-50 hover:bg-purple-600 text-purple-600 hover:text-white border-purple-100",
};

const iconBgStyles: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600 group-hover:bg-white group-hover:text-blue-600",
  cyan: "bg-cyan-100 text-cyan-600 group-hover:bg-white group-hover:text-cyan-600",
  orange: "bg-orange-100 text-orange-600 group-hover:bg-white group-hover:text-orange-600",
  purple: "bg-purple-100 text-purple-600 group-hover:bg-white group-hover:text-purple-600",
};

const detailHeaderColors: Record<string, string> = {
  blue: "bg-gradient-to-r from-blue-600 to-blue-500",
  cyan: "bg-gradient-to-r from-cyan-600 to-cyan-500",
  orange: "bg-gradient-to-r from-orange-600 to-orange-500",
  purple: "bg-gradient-to-r from-purple-600 to-purple-500",
};

const detailTextColors: Record<string, string> = {
  blue: "text-blue-600",
  cyan: "text-cyan-600",
  orange: "text-orange-600",
  purple: "text-purple-600",
};

const Services: React.FC<ServicesProps> = ({ content }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  // Safety check for content
  if (!content) {
    return null;
  }

  const handleServiceClick = (item: ServiceItem) => {
    setActiveService(item);
    // Scroll to the services section to ensure the detail view is visible
    setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    }, 100);
  };

  const handleBack = () => {
    setActiveService(null);
    const element = document.getElementById('services');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // --- Detail View Component ---
  const renderDetailView = (item: ServiceItem) => {
    if (!item) return null;

    // Safety checks / Default values
    const Icon = iconMap[item.iconName] || ShoppingBag;
    const headerBg = detailHeaderColors[item.color] || detailHeaderColors.blue;
    const textColor = detailTextColors[item.color] || detailTextColors.blue;
    const benefits = item.benefits || [];
    const workflow = item.workflow || [];
    const features = item.features || [];
    const bookConsultLabel = content.bookConsult || "Book Consultation";
    const backBtnLabel = content.backBtn || "Back";

    const isZh = bookConsultLabel.includes("咨询");
    const benefitsTitle = isZh ? "核心价值" : "Key Benefits";
    const workflowTitle = isZh ? "服务流程" : "Service Workflow";
    const scopeTitle = isZh ? "服务内容" : "Service Scope";
    const ctaText = isZh ? "准备好开启增长了吗？" : "Ready to grow your business?";

    return (
      <div className="animate-fade-in-up w-full">
        {/* Navigation */}
        <button 
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded-lg hover:bg-slate-50"
        >
          <ArrowLeft className="w-4 h-4" />
          {backBtnLabel}
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Header Banner */}
          <div className={`${headerBg} p-8 md:p-12 text-white relative overflow-hidden`}>
             <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                <Icon className="w-64 h-64" />
             </div>
             <div className="relative z-10">
               <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                 <Icon className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h3>
               <p className="text-blue-50 text-lg max-w-2xl leading-relaxed">
                 {item.fullDescription}
               </p>
             </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-0">
            {/* Left Column: Benefits & Workflow */}
            <div className="lg:col-span-2 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
               <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                 <Target className={`w-6 h-6 ${textColor}`} />
                 {benefitsTitle}
               </h4>
               
               {benefits.length > 0 && (
                 <div className="grid md:grid-cols-2 gap-6 mb-12">
                   {benefits.map((benefit, idx) => (
                     <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-slate-100">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${textColor} bg-white shadow-sm`}>
                          {idx === 0 && <BarChart className="w-5 h-5" />}
                          {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                          {idx >= 2 && <Users className="w-5 h-5" />}
                       </div>
                       <div>
                         <h5 className="font-bold text-slate-800 mb-1">{benefit.title}</h5>
                         <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               )}

               {workflow.length > 0 && (
                 <>
                   <h4 className="text-xl font-bold text-slate-900 mb-6">
                      {workflowTitle}
                   </h4>
                   <div className="space-y-4">
                     {workflow.map((step, idx) => (
                       <div key={idx} className="flex items-center gap-4 group">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
                            {idx + 1}
                          </div>
                          <div className="h-px flex-1 bg-slate-100 group-hover:bg-blue-100 transition-colors"></div>
                          <span className="font-medium text-slate-700">{step}</span>
                       </div>
                     ))}
                   </div>
                 </>
               )}
            </div>

            {/* Right Column: Features List & CTA */}
            <div className="p-8 md:p-12 bg-slate-50 flex flex-col h-full">
               <h4 className="text-xl font-bold text-slate-900 mb-6">
                 {scopeTitle}
               </h4>
               <ul className="space-y-4 mb-auto">
                 {features.map((feature, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     <CheckCircle className={`w-5 h-5 ${textColor} shrink-0 mt-0.5`} />
                     <span className="text-slate-600">{feature}</span>
                   </li>
                 ))}
               </ul>

               <div className="mt-12">
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                   <p className="text-slate-500 mb-4 text-sm">
                      {ctaText}
                   </p>
                   <a 
                     href="#contact"
                     onClick={handleContactClick}
                     className={`block w-full py-3 rounded-lg text-white font-semibold transition-transform hover:scale-105 shadow-lg ${headerBg}`}
                   >
                     {bookConsultLabel}
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Main List View ---
  return (
    <section id="services" className="py-24 bg-white min-h-[800px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{content.sectionTitle}</h2>
          <p className="text-slate-500">{content.sectionSubtitle}</p>
        </div>

        {activeService ? (
          renderDetailView(activeService)
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {content.items?.map((item) => {
              const Icon = iconMap[item.iconName] || ShoppingBag;
              const cardStyle = colorStyles[item.color] || colorStyles.blue;
              const iconBgStyle = iconBgStyles[item.color] || iconBgStyles.blue;

              return (
                <div 
                  key={item.id} 
                  onClick={() => handleServiceClick(item)}
                  className={`group relative p-8 rounded-2xl border transition-all duration-300 ${cardStyle} hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col h-full`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors ${iconBgStyle}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm opacity-80 mb-6 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {item.features?.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium opacity-90">
                        <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {item.features && item.features.length > 3 && (
                      <li className="text-xs opacity-75 pl-3.5 pt-1">
                        + {item.features.length - 3} more...
                      </li>
                    )}
                  </ul>

                  <button className="w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 border border-current/20 flex items-center justify-center gap-2 text-sm font-semibold transition-colors mt-auto">
                    {content.cta} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;