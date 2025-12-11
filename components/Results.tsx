import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ContentData } from '../types';

interface ResultsProps {
  content: ContentData['results'];
}

const Results: React.FC<ResultsProps> = ({ content }) => {
  
  // Configuration for Sales Growth Line Chart
  const getLineOption = () => ({
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#e2e8f0',
      textStyle: { color: '#334155' },
      formatter: '{b}: {c}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#64748b', fontSize: 12 }
    },
    yAxis: {
      type: 'value',
      splitLine: { 
        lineStyle: { type: 'dashed', color: '#f1f5f9' } 
      },
      axisLabel: { show: false },
      axisLine: { show: false }
    },
    series: [
      {
        name: 'Sales Index',
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8, // Small visible dots
        itemStyle: { 
          color: '#2563eb',
          borderWidth: 2,
          borderColor: '#fff'
        },
        lineStyle: { width: 3, color: '#2563eb' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(37, 99, 235, 0.2)' },
              { offset: 1, color: 'rgba(37, 99, 235, 0.0)' }
            ]
          }
        },
        data: [30, 45, 48, 60, 72, 85, 95]
      }
    ]
  });

  // Configuration for Platform Distribution Pie Chart
  const getPieOption = () => ({
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      formatter: '{b}: {d}%'
    },
    legend: {
      bottom: '0%',
      left: 'center',
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      textStyle: { color: '#64748b' }
    },
    series: [
      {
        name: 'Platform',
        type: 'pie',
        radius: ['50%', '75%'], // Donut chart style
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 3
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          scale: true,
          scaleSize: 5,
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
            color: '#334155',
            formatter: '{b}\n{d}%'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 45, name: 'Amazon', itemStyle: { color: '#3b82f6' } }, // Blue
          { value: 25, name: 'TikTok', itemStyle: { color: '#f97316' } }, // Orange
          { value: 20, name: 'DTC', itemStyle: { color: '#06b6d4' } },    // Cyan
          { value: 10, name: 'Other', itemStyle: { color: '#a855f7' } }    // Purple
        ]
      }
    ]
  });

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
           <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[400px]">
              <h4 className="text-sm font-bold text-slate-800 mb-4">{content.chartTitle}</h4>
              <div className="flex-grow w-full h-full">
                 <ReactECharts 
                    option={getLineOption()} 
                    style={{ height: '100%', width: '100%' }} 
                    opts={{ renderer: 'svg' }}
                 />
              </div>
           </div>

           {/* Pie Chart (Platform Distribution) */}
           <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-[400px]">
              <h4 className="text-sm font-bold text-slate-800 mb-4">{content.pieTitle}</h4>
              <div className="flex-grow w-full h-full">
                 <ReactECharts 
                    option={getPieOption()} 
                    style={{ height: '100%', width: '100%' }}
                    opts={{ renderer: 'svg' }}
                 />
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