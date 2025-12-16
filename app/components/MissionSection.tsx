import { Leaf, Heart, Globe } from 'lucide-react';

export default function MissionSection() {
  const cards = [
    {
      icon: Leaf,
      iconColor: "bg-green-700 text-white", // Fundo verde escuro, ícone branco
      title: "Impacto Ambiental",
      description: "Cada bananeira captura CO₂, produz oxigênio e ajuda na recuperação de solos degradados."
    },
    {
      icon: Heart,
      iconColor: "bg-amber-400 text-green-950", // Fundo amarelo, ícone escuro (para contraste)
      title: "Impacto Social",
      description: "Os frutos produzidos são doados para famílias carentes, garantindo segurança alimentar."
    },
    {
      icon: Globe,
      iconColor: "bg-orange-700 text-white", // Fundo terroso/laranja, ícone branco
      title: "Sustentabilidade",
      description: "Modelo sustentável que gera benefícios contínuos para o meio ambiente e sociedade."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">
            Nossa Missão
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Combinar sustentabilidade ambiental com impacto social através do plantio consciente de bananeiras em áreas degradadas.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
            >
              {/* Círculo do Ícone */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${card.iconColor}`}>
                <card.icon size={32} strokeWidth={2} />
              </div>

              {/* Texto do Card */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}