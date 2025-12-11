import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Results from './components/Results';
import Partners from './components/Partners';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('zh'); 
  const content = CONTENT[language];

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-200 font-sans text-slate-900">
      <Header 
        content={content.nav} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <main>
        <Hero content={content.hero} />
        <Intro content={content.intro} />
        <PainPoints content={content.painPoints} />
        <Services content={content.services} />
        <WhyChooseUs content={content.whyUs} />
        <Results content={content.results} />
        <Partners content={content.partners} />
        <Process content={content.process} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content.footer} />
      
      <ChatWidget content={content.aiWidget} />
    </div>
  );
}

export default App;