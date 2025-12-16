import React from 'react';

export default function VisionSection() {
    const environmentalBenefits = [
        "Alta capacidade de captura de CO₂",
        "Crescimento rápido e resistente",
        "Melhora a qualidade do solo",
        "Reduz erosão e temperatura local"
    ];

    const socialBenefits = [
        "Frutos nutritivos e saborosos",
        "Produção constante durante o ano",
        "Fonte de vitaminas e energia",
        "Fácil conservação e distribuição"
    ];

    return (
        <section className="w-full py-16 bg-gray-50 flex justify-center">
            {/* Container Principal "Card" */}
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-[#E6F0EB] rounded-3xl p-8 md:p-16 shadow-sm">

                    {/* Título Central */}
                    <h2 className="text-3xl md:text-4xl font-bold text-green-950 text-center mb-12">
                        Por que Bananeiras?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

                        {/* Coluna 1: Benefícios Ambientais */}
                        <div>
                            <h3 className="text-xl font-bold text-green-800 mb-6">
                                Benefícios Ambientais
                            </h3>
                            <ul className="space-y-4">
                                {environmentalBenefits.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        {/* Bullet Verde */}
                                        <span className="mt-2 w-2 h-2 rounded-full bg-green-600 shrink-0" />
                                        <span className="text-gray-600 font-medium leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Coluna 2: Benefícios Sociais */}
                        <div>
                            <h3 className="text-xl font-bold text-green-800 mb-6">
                                Benefícios Sociais
                            </h3>
                            <ul className="space-y-4">
                                {socialBenefits.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        {/* Bullet Amarelo */}
                                        <span className="mt-2 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                        <span className="text-gray-600 font-medium leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}