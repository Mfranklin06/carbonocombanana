import Image from 'next/image';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">
      {/* 1. Imagem de Fundo */}
      {/* Nota: Substitua '/banana-bg.jpg' pela sua imagem real ou uma URL externa */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1596443686812-2f45229eebc3?q=80&w=2071&auto=format&fit=crop"
          alt="Plantação de Bananeiras"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Verde (Gradiente para escurecer e dar o tom da marca) */}
        <div className="absolute inset-0 bg-green-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-green-950 via-transparent to-transparent opacity-90" />
      </div>

      {/* 2. Header / Top Navigation */}
      <header className="absolute top-0 right-0 p-6 z-20">
        <button className="flex items-center gap-2 px-6 py-2 text-white border border-white/30 rounded bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm text-sm font-medium">
          <LogIn size={16} />
          Login
        </button>
      </header>

      {/* 3. Conteúdo Central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Títulos */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-lg">
          CARBONO COM
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-400 tracking-tight drop-shadow-lg -mt-1.25 md:-mt-2.5">
          BANANA
        </h1>

        {/* Descrição */}
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-100 font-light leading-relaxed drop-shadow-md">
          Plante bananeiras, capture CO₂, alimente pessoas carentes. Uma iniciativa que transforma áreas degradadas em produção sustentável.
        </p>

        {/* Botões de Ação (CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link href='adoption/' className="px-8 py-3 bg-amber-400 text-green-950 font-bold rounded hover:bg-amber-300 transition-colors shadow-lg">
            Adote uma Bananeira
          </Link>
          
          <Link href='about/' className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded hover:bg-white/10 transition-colors backdrop-blur-sm">
            Saiba Mais
          </Link>
        </div>
      </div>

      {/* 4. Estatísticas (Footer da Section) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-md">27</span>
              <span className="text-white text-sm md:text-base font-medium drop-shadow-md">Bananeiras</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center border-l border-r border-white/20">
              <span className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-md">168t</span>
              <span className="text-white text-sm md:text-base font-medium drop-shadow-md">CO₂ Capturado</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-md">55</span>
              <span className="text-white text-sm md:text-base font-medium drop-shadow-md">Famílias</span>
            </div>
          </div>
        </div>
        
        {/* Indicador de Scroll (Linha vertical pequena) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-linear-to-t from-amber-400 to-transparent opacity-70"></div>
      </div>
    </section>
  );
}