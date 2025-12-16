import React from 'react';

export default function CtaSection() {
  return (
    <section className="w-full py-20 bg-gray-50 flex justify-center items-center">
      <div className="container mx-auto px-4">
        
        {/* Card Principal */}
        <div className="bg-[#FAF8E6] rounded-2xl p-10 md:p-16 shadow-sm border border-amber-100 max-w-5xl mx-auto text-center">
          
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B5C45] mb-4">
            Pronto para Fazer a Diferença?
          </h2>
          
          {/* Subtítulo */}
          <p className="text-[#8C7E6A] text-lg mb-10 max-w-2xl mx-auto">
            Cada bananeira representa uma escolha por um futuro sustentável.
          </p>
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-md transition-colors shadow-sm w-full sm:w-auto">
              Adotar Bananeiras
            </button>
            
            <button className="px-8 py-3 bg-transparent border border-[#8C7E6A] text-[#6B5C45] font-semibold rounded-md hover:bg-[#F0EED0] transition-colors w-full sm:w-auto">
              Ver Detalhes
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}