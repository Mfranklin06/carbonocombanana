import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdoptionHero() {
    return (
        <div className="relative bg-[#1F5F3B] text-white py-16 overflow-hidden">
            {/* Background Decorativo (opcional) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80')] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <Link href="/" className="inline-flex items-center text-green-100 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Voltar
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    Adote sua <span className="text-[#FBC02D]">Bananeira</span>
                </h1>
                <p className="text-center text-lg text-green-50 max-w-2xl mx-auto">
                    Faça parte da revolução verde. Escolha seu plano e comece a fazer a diferença hoje mesmo.
                </p>
            </div>
        </div>
    );
}