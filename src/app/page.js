"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isBarking, setIsBarking] = useState(false);

  const handleBark = () => {
    setIsBarking(true);
    // Reproducir un sonido de ladrido
    const audio = new Audio("https://actions.google.com/sounds/v1/animals/dog_barking.ogg");
    audio.play().catch(e => console.error("Audio play failed", e));
    
    setTimeout(() => {
      setIsBarking(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center w-full max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight leading-tight drop-shadow-sm mb-6">
          ¡Hola! Soy tu asistente
        </h1>
        <p className="text-xl md:text-2xl text-indigo-800/80 font-medium max-w-2xl mx-auto">
          Un pequeño descanso antes de empezar con los verdaderos masajes terapéuticos. Haz clic en el perrito para interactuar.
        </p>
      </div>
      
      <div className="relative z-20 mt-8 mb-24 cursor-pointer group" onClick={handleBark}>
        {/* Animated Speech Bubble */}
        <div 
          className={`absolute -top-32 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out z-30 ${
            isBarking ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-12 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-[2rem] px-8 py-6 shadow-2xl relative border-4 border-indigo-50">
            <p className="text-5xl font-black text-indigo-600 whitespace-nowrap animate-bounce" style={{textShadow: '0 2px 10px rgba(79, 70, 229, 0.2)'}}>
              ¡GUAU! 🐶
            </p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-t-[24px] border-t-white border-r-[20px] border-r-transparent filter drop-shadow-xl"></div>
          </div>
        </div>

        {/* Puppy Image */}
        <div className={`relative transition-all duration-[400ms] ${isBarking ? 'scale-110 -translate-y-8 rotate-3 shadow-2xl' : 'hover:scale-105 hover:-translate-y-2'} rounded-[3rem] overflow-hidden shadow-xl bg-white/70 border-8 border-white backdrop-blur-sm z-20`}>
          <Image 
            src="/puppy.png" 
            alt="Perrito muy mono" 
            width={400} 
            height={400} 
            className="object-cover w-64 h-64 md:w-80 md:h-80 transition-transform duration-700 ease-in-out group-hover:scale-110"
            priority
          />
        </div>

        {/* Pulse rings */}
        {isBarking && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-full h-full rounded-[3rem] border-4 border-indigo-400 absolute animate-ping opacity-75"></div>
            <div className="w-[120%] h-[120%] rounded-[3rem] border-4 border-purple-400 absolute animate-ping opacity-40" style={{animationDelay: '150ms'}}></div>
          </div>
        )}

        {/* Hint text on hover */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-900/90 backdrop-blur text-white px-6 py-3 rounded-full font-semibold shadow-xl border border-white/20 whitespace-nowrap">
          👆 ¡Toca para saludar!
        </div>
      </div>
      
    </div>
  );
}
