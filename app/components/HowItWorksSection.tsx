import React from 'react';
import { HandHeart, Sprout, Apple, Users, RefreshCw, Smartphone } from 'lucide-react';

export default function HowItWorksSection() {
    const steps = [
        {
            icon: HandHeart,
            title: "1. Você Adota",
            description: "Escolha quantas bananeiras deseja adotar."
        },
        {
            icon: Sprout,
            title: "2. Nós Plantamos",
            description: "Plantamos sua bananeira com acompanhamento técnico."
        },
        {
            icon: Apple,
            title: "3. Colhemos",
            description: "Cuidamos da plantação até a colheita."
        },
        {
            icon: Users,
            title: "4. Doamos",
            description: "Distribuímos para famílias carentes."
        },
        {
            icon: RefreshCw,
            title: "5. Ciclo Continua",
            description: "Brotos crescem e produzem em 3 meses."
        }
    ];

    return (
        <section className="w-full py-20 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* Cabeçalho */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-green-950 mb-4">
                        Como Funciona
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Um processo simples que gera impacto duradouro.
                    </p>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        A bananeira produz apenas um cacho por planta. Após isso, deixa brotos que crescem e produzem novos cachos em apenas 3 meses.
                    </p>
                </div>

                {/* Steps Flow */}
                <div className="relative flex flex-col md:flex-row justify-between items-start gap-8 mb-20 max-w-7xl mx-auto">

                    {/* Linha conectora (Visível apenas em Desktop) */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center w-full md:w-1/5 z-10 group">

                            {/* Linha verde de progresso (Conecta este item ao próximo) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-green-600 -z-10" />
                            )}

                            {/* Ícone Circular */}
                            <div className="w-20 h-20 rounded-full bg-green-700 text-white flex items-center justify-center mb-6 shadow-lg border-4 border-slate-50 group-hover:scale-110 transition-transform duration-300">
                                <step.icon size={32} />
                            </div>

                            {/* Card Branco */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full min-h-45 flex flex-col items-center">
                                <h3 className="font-bold text-green-900 mb-3 text-lg">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner Inferior (Acompanhamento) */}
                <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-green-950 mb-1">
                            Acompanhe em tempo real
                        </h3>
                        <p className="text-gray-500">
                            Receba atualizações, fotos e relatórios de impacto.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}