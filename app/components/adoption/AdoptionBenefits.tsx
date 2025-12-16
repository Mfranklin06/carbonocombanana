import { Check } from 'lucide-react';

export default function AdoptionBenefits() {
    const benefits = [
        { title: "Rastreabilidade Completa", desc: "Geolocalização da planta até a doação." },
        { title: "Fotos e Vídeos", desc: "Registros do crescimento e colheita." },
        { title: "Manejo 100% Orgânico", desc: "Sem agrotóxicos ou químicos." },
        { title: "Etiquetas Personalizadas", desc: "Cada cacho recebe o nome da sua planta." },
        { title: "Participação Voluntária", desc: "Participe no dia da entrega." },
        { title: "Acompanhamento Real", desc: "Monitore via app ou site." },
        { title: "Ar Mais Puro", desc: "Produção de oxigênio diária." },
        { title: "Propósito Pessoal", desc: "Satisfação de fazer a diferença." },
        { title: "Conexão com a Natureza", desc: "Reconecte-se com o meio ambiente." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-green-950 mb-12">O que você ganha com a adoção</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {benefits.map((b, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                                <Check size={24} />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">{b.title}</h3>
                            <p className="text-sm text-gray-500 max-w-xs">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}