import React from 'react';

export default function AdoptionCommitment() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl font-bold text-green-950">Um compromisso real com a vida</h2>
                    <div className="bg-green-50/50 p-8 rounded-xl border border-green-100 text-left text-gray-700 leading-relaxed space-y-4">
                        <p>
                            Ao adotar uma bananeira, você está assumindo mais do que um apoio simbólico: está financiando uma vida vegetal, sua manutenção, nutrição e o impacto ambiental e social que ela vai gerar.
                        </p>
                        <p>
                            Cada planta adotada representa um ser vivo que depende de cuidado constante: adubação, irrigação, manejo ecológico e segurança.
                        </p>
                        <p className="font-medium text-green-800">
                            Por isso, pedimos que a adoção seja feita com consciência e <span className="font-bold">fidelidade mínima de 12 meses</span>. Esse é o tempo necessário para garantir que a planta se estabeleça, cresça e inicie seu ciclo produtivo com estabilidade.
                        </p>
                        <p className="text-sm italic text-gray-500">
                            Aqui você está investindo em vida, reflorestamento, alimento e futuro.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}