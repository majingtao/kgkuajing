import React, { useState } from 'react';
import { Send, Mail, Phone } from 'lucide-react';
import { ContentData } from '../types';

interface ContactProps {
  content: ContentData['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-blue-600 p-12 md:w-2/5 flex flex-col justify-between text-white relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-700 rounded-tr-full opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">{content.title}</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                {content.subtitle}
              </p>
            </div>
            <div className="relative z-10 space-y-6">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-blue-500/50 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <div className="text-xs text-blue-200 uppercase tracking-wider">Email</div>
                   <div className="font-medium">mjt@kugua.cn</div>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-blue-500/50 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                 </div>
                 <div>
                   <div className="text-xs text-blue-200 uppercase tracking-wider">Phone</div>
                   <div className="font-medium">+86 13666689797</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-3/5 bg-white">
            {submitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center text-green-600 animate-fade-in">
                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                 </div>
                 <h4 className="text-xl font-bold">{content.success}</h4>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{content.formName}</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{content.formEmail}</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{content.formMessage}</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transform hover:-translate-y-0.5">
                  {content.submit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;