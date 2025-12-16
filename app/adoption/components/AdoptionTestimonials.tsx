import { Star } from 'lucide-react';

export default function AdoptionTestimonials() {
    const testimonials = [
        {
            initials: "MS", name: "Marina Silva", loc: "São Paulo, SP",
            text: "Adotar uma bananeira foi a forma mais tangível que encontrei de fazer diferença. Recebo fotos mensais e ver minha planta crescer é emocionante."
        },
        {
            initials: "CE", name: "Carlos Eduardo", loc: "Belo Horizonte, MG",
            text: "Como empresário, buscava formas de compensar as emissões. A rastreabilidade é impressionante, mostro aos clientes o impacto exato."
        },
        {
            initials: "AP", name: "Ana Paula Mendes", loc: "Rio de Janeiro, RJ",
            text: "Meus filhos adoram acompanhar o crescimento. Quando as bananas são doadas, eles sentem que fizeram parte de algo maior."
        },
        {
            initials: "RS", name: "Roberto Santos", loc: "Curitiba, PR",
            text: "A transparência do projeto é o que mais me conquistou. Cada etapa é documentada, desde o plantio até a doação."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-green-950 mb-4">O que nossos adotantes dizem</h2>
                <p className="text-center text-gray-500 mb-12">Histórias reais de pessoas que estão fazendo a diferença</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                                        <span className="text-xs text-gray-500">{t.loc}</span>
                                        <div className="flex text-amber-400 mt-1">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-6xl text-gray-200 font-serif leading-none h-8">”</span>
                            </div>
                            <p className="text-gray-600 italic text-sm leading-relaxed">{t.text}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-[#FAF8E6] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 border border-amber-100">
                    {[
                        { val: "500+", label: "Adotantes ativos" },
                        { val: "1.200+", label: "Bananeiras adotadas" },
                        { val: "162t", label: "CO₂ capturado/ano" },
                        { val: "3.500kg", label: "Bananas doadas/mês" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <span className="block text-3xl font-bold text-[#6B5C45]">{stat.val}</span>
                            <span className="text-xs text-[#8C7E6A] uppercase tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}