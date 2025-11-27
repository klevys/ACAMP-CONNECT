import React from 'react';
import { EVENT_DATA, THEME_COLORS } from '../constants';
import { CalendarIcon, ClockIcon, MapPinIcon } from './Icons';

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Text Info */}
        <div className="space-y-8">
            <div>
                <h2 className="text-4xl font-heavy mb-6 text-gray-900">Sobre o Acamp</h2>
                <div className="w-20 h-2 rounded-full mb-6" style={{ backgroundColor: THEME_COLORS.blobYellow }}></div>
                <p className="text-xl text-gray-700 leading-relaxed">
                    🏕️ <strong>Acamp CONNECT</strong> - Exclusivo para membros da Connect.
                    <br/><br/>
                    Prepare-se para 4 dias intensos de comunhão, diversão e crescimento espiritual. 
                    Uma experiência única para começar o ano de 2026 conectado com o propósito.
                </p>
            </div>

            <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-red-50 text-red-500">
                        <CalendarIcon size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Data</h4>
                        <p className="text-gray-600">14 a 17 de Fevereiro, 2026</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-orange-50 text-orange-500">
                        <ClockIcon size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Horário</h4>
                        <p className="text-gray-600">Início: 14/02 às 10:00</p>
                        <p className="text-gray-600">Término: 17/02 às 14:00</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-green-50 text-green-600">
                        <MapPinIcon size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">Local</h4>
                        <p className="text-gray-800 font-medium">{EVENT_DATA.location}</p>
                        <p className="text-gray-500 text-sm leading-snug mb-2 max-w-xs">{EVENT_DATA.fullAddress}</p>
                        <a 
                            href={EVENT_DATA.locationUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-bold underline hover:no-underline"
                            style={{ color: THEME_COLORS.accentGreen }}
                        >
                            Ver rota no mapa →
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Google Maps Embed */}
        <div className="h-full min-h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-lg relative group">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.7663460401745!2d-48.2474064249779!3d-10.199620589916217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b32a419ad44ff%3A0x36ae7232604df956!2sMaanaim%20-%20Sibapa!5e0!3m2!1spt-BR!2sbr!4v1764252107539!5m2!1spt-BR!2sbr"
             width="600" 
             height="450" 
             className="absolute inset-0 w-full h-full border-0"
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             style={{ filter: 'grayscale(0%) contrast(1.1)' }}
            >
            </iframe>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;