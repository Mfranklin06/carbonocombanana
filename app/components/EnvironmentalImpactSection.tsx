import React from 'react';
import { Trees, Wind, Thermometer, Droplets } from 'lucide-react';

export default function EnvironmentalImpactSection() {
    const metrics = [
        {
            icon: Trees,
            value: "135kg",
            sub: "por toceira/ano",
            label: "Captura de CO₂",
            desc: "Uma toceira pode capturar até 135kg de CO₂ anualmente."
        },
        {
            icon: Wind,
            value: "96kg",
            sub: "por toceira/ano",
            label: "Produção de O₂",
            desc: "Oxigênio para uma pessoa respirar por 6 dias ao mês."
        },
        {
            icon: Thermometer,
            value: "-7°C",
            sub: "no microclima",
            label: "Temperatura",
            desc: "Sombra e umidade reduzem a temperatura ambiente."
        },
        {
            icon: Droplets,
            value: "90%",
            sub: "menos evaporação",
            label: "Água",
            desc: "O sombreamento conserva a água do solo."
        }
    ];

    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Cabeçalho */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-4">
                        Impacto Ambiental
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Cada toceira gera benefícios mensuráveis para o clima.
                    </p>
                </div>

                {/* 1. Grid de Cards Superiores (Métricas) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {metrics.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-green-900 mb-1">
                                {item.value}
                            </h3>
                            <span className="text-xs text-gray-400 uppercase tracking-wide mb-4">
                                {item.sub}
                            </span>
                            <h4 className="font-bold text-gray-800 mb-2">
                                {item.label}
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 2. Seção Inferior (Transformando Áreas + Dashboard) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Lado Esquerdo: Texto e Lista */}
                    <div>
                        <h3 className="text-2xl font-bold text-green-950 mb-4">
                            Transformando Áreas Degradadas
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Nosso projeto foca na recuperação de terras degradadas, transformando áreas improdutivas em ecossistemas sustentáveis.
                        </p>

                        {/* Caixa Verde Clara - Resultados */}
                        <div className="bg-[#E6F0EB] p-6 rounded-lg border border-green-100">
                            <h4 className="font-bold text-green-800 mb-4">
                                Resultados Comprovados:
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    "40% melhoria no solo em 2 anos",
                                    "60% redução na erosão",
                                    "300% aumento na biodiversidade"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-green-900 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Lado Direito: Grid Colorido (Dashboard) */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Card Verde */}
                        <div className="bg-green-700 p-6 rounded-lg text-center text-white flex flex-col justify-center h-32">
                            <span className="text-3xl font-bold block">1,250</span>
                            <span className="text-sm opacity-90">Toceiras</span>
                        </div>

                        {/* Card Amarelo */}
                        <div className="bg-amber-400 p-6 rounded-lg text-center text-green-950 flex flex-col justify-center h-32">
                            <span className="text-3xl font-bold block">15 ha</span>
                            <span className="text-sm font-medium">Área</span>
                        </div>

                        {/* Card Azul Claro */}
                        <div className="bg-sky-300 p-6 rounded-lg text-center text-white flex flex-col justify-center h-32">
                            <span className="text-3xl font-bold block">168t</span>
                            <span className="text-sm font-medium">CO₂</span>
                        </div>

                        {/* Card Laranja/Marrom */}
                        <div className="bg-orange-700 p-6 rounded-lg text-center text-white flex flex-col justify-center h-32">
                            <span className="text-3xl font-bold block">55</span>
                            <span className="text-sm opacity-90">Famílias</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}