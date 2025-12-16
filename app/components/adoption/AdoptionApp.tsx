import { Smartphone, Download } from 'lucide-react';

export default function AdoptionApp() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
                    <Smartphone size={48} className="text-green-800 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-green-950 mb-4">Baixe nosso App</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Acompanhe sua bananeira em tempo real, receba notificações sobre manutenções, veja fotos do desenvolvimento e acesse seus relatórios mensais.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="flex items-center justify-center gap-2 bg-[#1F5F3B] text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
                            <Download size={20} />
                            Download para Android
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <Download size={20} />
                            Download para iOS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}