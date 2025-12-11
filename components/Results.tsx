
import React from 'react';
import { ContentData } from '../types';

interface ResultsProps {
  content: ContentData['results'];
}

const Results: React.FC<ResultsProps> = ({ content }) => {
  // Data for the line chart
  const lineData = [30, 45, 48, 60, 72, 85, 95];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const maxVal = 100;
  
  // Generate SVG path for the line
  const points = lineData.map((val, index) => {
    const x = (index / (lineData.length - 1)) * 100;
    const y = 100 - (val / maxVal) * 100;
    return `${x},${y}`;
  });

  const polylinePoints = points.join(' ');
  // Create area path (closed loop)
  const areaPath = `0,100 ${polylinePoints} 100,100`;

  return (
    <section id="results" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">{content.sectionTitle}</h2>
          <p className="text-slate-500">{content.sectionSubtitle}</p>
        </div>

        {/* Charts Container */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
           {/* Line Chart (Growth Trend) */}
           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <h4 className="text-sm font-bold text-slate-800 mb-8">{content.chartTitle}</h4>
              <div className="relative h-64 w-full flex-grow">
                 {/* Grid Lines */}
                 <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-300">
                    <div className="border-b border-slate-200 w-full h-0"></div>
                    <div className="border-b border-slate-200 w-full h-0"></div>
                    <div className="border-b border-slate-200 w-full h-0"></div>
                    <div className="border-b border-slate-200 w-full h-0"></div>
                    <div className="border-b border-slate-200 w-full h-0"></div>
                 </div>

                 {/* SVG Chart */}
                 <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Area Fill */}
                    <polygon points={areaPath} className="fill-blue-500/10" />
                    {/* Line */}
                    <polyline 
                      points={polylinePoints} 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="drop-shadow-md"
                    />
                    {/* Dots */}
                    {points.map((point, i) => {
                      const [cx, cy] = point.split(',');
                      return (
                        <circle 
                          key={i} 
                          cx={cx} 
                          cy={cy} 
                          r="2.5" 
                          strokeWidth="2"
                          className="fill-white stroke-blue-600 hover:scale-150 transition-transform cursor-pointer"
                        >
                           <title>Value: {lineData[i]}</title>
                        </circle>
                      );
                    })}
                 </svg>
              </div>
              {/* Labels with explicit percentage positioning to match chart points */}
              <div className="relative w-full h-6 mt-4 text-xs text-slate-400">
                {labels.map((label, i) => (
                  <span 
                    key={i}
                    className="absolute transform -translate-x-1/2"
                    style={{ left: `${(i / (labels.length - 1)) * 100}%` }}
                  >
                    {label}
                  </span>
                ))}
              </div>
           </div>

           {/* Pie Chart (Platform Distribution) */}
           {/* Amazon 45%, TikTok 25%, DTC 20%, Other 10% */}
           <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center">
              <h4 className="text-sm font-bold text-slate-800 mb-8 w-full text-left">{content.pieTitle}</h4>
              <div className="relative w-64 h-64 rounded-full shadow-inner" 
                   style={{ background: 'conic-gradient(#3b82f6 0% 45%, #f97316 45% 70%, #06b6d4 70% 90%, #a855f7 90% 100%)' }}>
                 <div className="absolute inset-8 bg-slate-50 rounded-full flex items-center justify-center flex-col shadow-sm">
                    <span className="text-3xl font-bold text-slate-800">$80M+</span>
                    <span className="text-xs text-slate-500">Total GMV</span>
                 </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 justify-center text-xs font-medium text-slate-600">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Amazon 45%
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    TikTok 25%
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    DTC 20%
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Other 10%
                 </div>
              </div>
           </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
           {content.stats.map((stat, idx) => (
             <div key={idx} className="text-center group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:-translate-y-1 transition-transform">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
