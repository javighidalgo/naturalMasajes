import Image from "next/image";
import { Calendar, ChevronRight, Activity, HeartPulse, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Navbar Minimalista */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-slate-800">
            Natural<span className="text-emerald-600">Masajes.</span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
            <Calendar className="w-5 h-5" />
            <span>Pedir Cita</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative w-full min-h-[85vh] bg-white flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Clínica de Fisioterapia - Espacio luminoso y limpio" 
            fill 
            className="object-cover object-center opacity-40 mix-blend-multiply" 
            priority 
          />
          {/* Gradients to fade image smoothly into white */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-12 pb-24 md:py-0">
          <div className="max-w-2xl bg-white/5 backdrop-blur-3xl p-2 sm:p-8 rounded-[3rem] border border-white/50 shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 text-emerald-800 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm border border-emerald-200/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Nuevas horas disponibles
            </div>

            <h1 className="text-6xl md:text-[5rem] md:leading-[1.05] font-extrabold tracking-tight text-slate-900">
              Tu bienestar,<br/>
              <span className="text-emerald-600 bg-clip-text">nuestra prioridad.</span>
            </h1>
            
            <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
              Fisioterapia clínica, deportiva y masaje integral. Nos basamos en la evidencia científica para aplicar tratamientos personalizados que te ayuden a disfrutar de una vida sin dolor.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
               <button className="group flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1">
                  Reservar sesión
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-md">
                  Nuestros servicios
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* Sobre Mí Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Image Block */}
            <div className="w-full md:w-5/12 flex justify-center relative">
              <div className="relative w-full aspect-[4/5] max-w-sm rounded-[3rem] bg-indigo-50 overflow-hidden shadow-2xl transform md:-rotate-3 transition-transform hover:rotate-0 duration-500">
                <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center text-emerald-200/50">
                   <User className="w-48 h-48" />
                </div>
                {/* Text overlay since no real human photo yet */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-3xl text-center border border-white/50 shadow-sm">
                  <h4 className="font-bold text-slate-900 tracking-tight">Javier Hidalgo</h4>
                  <p className="text-sm font-medium text-emerald-600">Fisioterapeuta Titulado</p>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-px bg-emerald-600"></span>
                <h2 className="text-emerald-700 font-bold tracking-widest text-sm uppercase">Sobre Mí</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                Más allá de aliviar los síntomas.
              </h3>
              
              <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
                <p>
                  Mi objetivo en <strong className="font-semibold text-slate-900">Natural Masajes</strong> es ir mucho más allá del alivio a corto plazo. Buscamos detectar, evaluar e intervenir en el origen de tu problema.
                </p>
                <p>
                  Especializados en <strong>terapia manual</strong>, <strong>punción seca</strong> y masajes terapéuticos de alto impacto. Ya seas deportista, o sufras dolor proveniente del estrés diario, diseñaremos un plan integral a tu medida.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <Activity className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Diagnóstico</h4>
                  <p className="text-slate-500 mt-2 font-medium">Análisis detallado de tu movilidad para una recuperación certera.</p>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                    <HeartPulse className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Trato Humano</h4>
                  <p className="text-slate-500 mt-2 font-medium">Nos preocupamos genuinamente por escuchar a tu cuerpo de forma cercana.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p className="font-medium">© {new Date().getFullYear()} Natural Masajes & Fisioterapia Javier Hidalgo.</p>
      </footer>
    </div>
  );
}
