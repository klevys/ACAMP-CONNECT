import React from 'react';
import { EVENT_DATA, THEME_COLORS } from '../constants';
import { SquiggleBackground } from './Icons';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: THEME_COLORS.bgRed }}
    >
      <SquiggleBackground />
      
      {/* Central Blob Container */}
      <div className="relative z-10 blob-animate">
        <div className="relative flex items-center justify-center">
            {/* Organic Blob SVG */}
            <svg viewBox="0 0 500 500" className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                <path fill={THEME_COLORS.blobYellow} d="M418.3,327.9c16.2-46.7,8.6-101.9-19.1-147.2c-23.7-38.7-61.9-67-106.3-77.9
                    c-45.5-11.2-94.6,0.3-132.8,28.6c-37.1,27.5-62,69.7-65.7,115.8c-3.7,46.5,15.7,92.5,50.8,124.6c34.3,31.4,81.8,47.4,128.3,46.5
                    c47.7-0.9,94-20.7,126.3-54.8C421.4,346.7,414.6,338.6,418.3,327.9z" 
                    transform="scale(1.1) translate(-20, -20)"
                />
            </svg>

            {/* Typography Content overlaid on blob */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="flex flex-col items-center justify-center leading-none tracking-tighter transform -rotate-2">
                    <span className="text-white text-5xl sm:text-7xl md:text-8xl font-heavy drop-shadow-md">
                        ACAMP
                    </span>
                    <span className="text-white text-5xl sm:text-7xl md:text-8xl font-heavy drop-shadow-md mt-[-5px] sm:mt-[-10px]">
                        CONNECT
                    </span>
                </h1>
                
                <div 
                    className="mt-4 px-6 py-2 transform rotate-1 shadow-lg"
                    style={{ backgroundColor: THEME_COLORS.accentGreen }}
                >
                    <span className="text-white text-3xl sm:text-5xl font-heavy tracking-widest">
                        2026
                    </span>
                </div>
            </div>
        </div>
      </div>

      <div className="relative z-20 mt-8 text-white text-center max-w-md animate-bounce">
         <p className="text-xl font-medium mb-2">Deslize para saber mais</p>
         <div className="w-1 h-8 bg-white mx-auto rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;