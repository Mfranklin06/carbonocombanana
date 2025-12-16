'use client'

import React, { useState } from 'react';
import { Check, Plus, Minus } from 'lucide-react';

export default function AdoptionPricing() {
    const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');
    const [qtyPlantio, setQtyPlantio] = useState(0);
    const [qtyProducao, setQtyProducao] = useState(0);

    const prices = {
        plantio: period === 'monthly' ? 77.93 : 841.64,
        producao: period === 'monthly' ? 109.77 : 1185.52,
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Toggle Mensal/Anual */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-200 p-1 rounded-full flex items-center relative">
                        <button
                            onClick={() => setPeriod('monthly')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${period === 'monthly' ? 'bg-[#1F5F3B] text-white shadow-md' : 'text-gray-600'}`}
                        >
                            Mensal
                        </button>
                        <button
                            onClick={() => setPeriod('yearly')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${period === 'yearly' ? 'bg-[#1F5F3B] text-white shadow-md' : 'text-gray-600'}`}
                        >
                            Anual <span className="bg-[#FBC02D] text-[10px] text-green-900 px-1.5 rounded ml-1">-10%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

                    {/* Card 1: Plantio */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Desde o Plantio</h3>
                        <p className="text-sm text-gray-500 mb-6">Crie um vínculo com sua plantinha desde bebê</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-green-900">R$ {prices.plantio.toFixed(2)}</span>
                            <span className="text-gray-500 text-sm">/{period === 'monthly' ? 'mês' : 'ano'}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Acompanhamento completo desde a muda",
                                "Fotos e vídeos de cada etapa",
                                "Plaquinha personalizada",
                                "Manejo orgânico: desfolha, capina"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check size={16} className="text-green-600 mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                            <li className="text-xs text-gray-400 pl-7">+ 4 benefícios adicionais</li>
                        </ul>
                        <button className="w-full py-3 border-2 border-[#1F5F3B] text-[#1F5F3B] font-bold rounded-lg hover:bg-green-50 transition-colors">
                            Adotar Agora
                        </button>
                    </div>

                    {/* Card 2: Em Produção (Destaque) */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#1F5F3B] relative transform lg:-translate-y-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1F5F3B] text-white text-xs font-bold px-4 py-1 rounded-b-lg">
                            ★ Mais Popular
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">Bananeira já em produção</h3>
                        <p className="text-sm text-gray-500 mb-6">Impacto imediato</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-green-900">R$ {prices.producao.toFixed(2)}</span>
                            <span className="text-gray-500 text-sm">/{period === 'monthly' ? 'mês' : 'ano'}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                            {[
                                "Toceira adulta com 3 plantas produtivas",
                                "Captura 135kg de CO₂ por ano",
                                "Produção de 96kg de O₂ por ano",
                                "Produção imediata de alimentos"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                    <Check size={16} className="text-green-600 mt-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                            <li className="text-xs text-gray-400 pl-7">+ 5 benefícios adicionais</li>
                        </ul>
                        <button className="w-full py-3 bg-[#1F5F3B] text-white font-bold rounded-lg hover:bg-[#16462b] transition-colors shadow-lg shadow-green-900/20">
                            Adotar Agora
                        </button>
                    </div>

                    {/* Card 3: Adoção Múltipla */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Adoção Múltipla</h3>
                        <p className="text-sm text-gray-500 mb-6">Monte seu pacote personalizado</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-green-900">
                                R$ {((qtyPlantio * prices.plantio) + (qtyProducao * prices.producao)).toFixed(2)}
                            </span>
                            <span className="text-gray-500 text-sm">/{period === 'monthly' ? 'mês' : 'ano'}</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            {/* Counter Plantio */}
                            <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">Desde o Plantio</span>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setQtyPlantio(Math.max(0, qtyPlantio - 1))} className="w-6 h-6 rounded bg-white shadow flex items-center justify-center text-green-700 hover:bg-gray-100"><Minus size={14} /></button>
                                    <span className="text-sm w-4 text-center">{qtyPlantio}</span>
                                    <button onClick={() => setQtyPlantio(qtyPlantio + 1)} className="w-6 h-6 rounded bg-white shadow flex items-center justify-center text-green-700 hover:bg-gray-100"><Plus size={14} /></button>
                                </div>
                            </div>

                            {/* Counter Produção */}
                            <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">Em Produção</span>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setQtyProducao(Math.max(0, qtyProducao - 1))} className="w-6 h-6 rounded bg-white shadow flex items-center justify-center text-green-700 hover:bg-gray-100"><Minus size={14} /></button>
                                    <span className="text-sm w-4 text-center">{qtyProducao}</span>
                                    <button onClick={() => setQtyProducao(qtyProducao + 1)} className="w-6 h-6 rounded bg-white shadow flex items-center justify-center text-green-700 hover:bg-gray-100"><Plus size={14} /></button>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-3 bg-[#8ba896] text-white font-bold rounded-lg hover:bg-[#7a9684] transition-colors">
                            Calcular e Adotar
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}