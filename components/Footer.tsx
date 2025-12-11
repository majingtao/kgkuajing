import React from 'react';
import { ContentData } from '../types';
import { Globe, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  content: ContentData['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
               <Globe className="w-8 h-8 text-blue-600" />
               Kugua Tech <span className="text-sm font-normal text-slate-400 mt-1">苦瓜科技</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
               Professional Cross-Border E-Commerce Solutions for Global Growth.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
             <h4 className="text-white font-semibold mb-4">Contact</h4>
             <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>mjt@kugua.cn</span>
             </div>
             <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+86 13666689797</span>
             </div>
          </div>
          
           {/* Address */}
           <div>
             <h4 className="text-white font-semibold mb-4">Location</h4>
             <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 mt-1" />
                <span>Hangzhou, Zhejiang, China<br/>E-Commerce Industrial Park</span>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
           <div>&copy; {new Date().getFullYear()} {content.copyright}</div>
           <div>{content.rights}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;