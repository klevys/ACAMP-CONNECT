import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import PricingCard from './components/PricingCard';
import { WhatsappIcon } from './components/Icons';
import { EVENT_DATA } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-pink-200 selection:text-pink-900">
      
      {/* Hero Header */}
      <Hero />

      {/* Info & Map */}
      <InfoSection />

      {/* Pricing & Call to Action */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-heavy text-center mb-12 text-gray-900">
            Inscrição
          </h2>
          <PricingCard />
        </div>
      </section>

      {/* Organizer Contact / Footer */}
      <footer className="py-12 text-white" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Dúvidas?</h3>
          
          <a 
            href={`https://wa.me/${EVENT_DATA.contactPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] text-white px-8 py-3 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg mb-8"
          >
            <WhatsappIcon size={24} />
            <span>Falar com Organizador</span>
          </a>
          
          <p className="text-gray-400 text-sm mb-8">
            WhatsApp: {EVENT_DATA.contactDisplay}
          </p>

          <div className="border-t border-gray-700 pt-8 text-gray-400 text-sm">
            <p>&copy; 2026 Sibapa. Todos os direitos reservados.</p>
            <p className="mt-2">Palmas, TO</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;