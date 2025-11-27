import React from 'react';
import { EVENT_DATA, THEME_COLORS } from '../constants';
import { ExternalLinkIcon } from './Icons';

const PricingCard: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100 transform hover:scale-105 transition-transform duration-300">
      <div className="p-8 text-center bg-gray-50 border-b border-gray-100">
        <span className="inline-block py-1 px-3 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100 text-blue-800 mb-2">
          Vagas Limitadas
        </span>
        <h3 className="text-2xl font-bold text-gray-800">{EVENT_DATA.batchInfo}</h3>
      </div>
      
      <div className="p-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <span className="text-5xl font-heavy text-gray-900">R$ {EVENT_DATA.price}</span>
          <span className="text-gray-500 text-xl font-medium ml-2">,00</span>
        </div>
        
        <p className="text-gray-500 mb-8 px-4">
          Garanta sua vaga no 1º lote e participe do maior evento da Connect.
        </p>

        <a 
          href={EVENT_DATA.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block py-4 px-6 rounded-xl text-white text-xl font-bold shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2"
          style={{ backgroundColor: THEME_COLORS.accentGreen }}
        >
          <span>Inscrever-se Agora</span>
          <ExternalLinkIcon size={20} />
        </a>
        <p className="mt-4 text-xs text-gray-400">Plataforma externa segura (Sibapa)</p>
      </div>
    </div>
  );
};

export default PricingCard;