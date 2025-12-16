import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin, Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F5F3B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Parte Superior: 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Coluna 1: Marca, Social e CTA (Ocupa 6 colunas no desktop) */}
          <div className="md:col-span-6 space-y-6">
            
            {/* Logo e Título */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1F5F3B]">
                <Sprout size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-none">CARBONO COM BANANA</h3>
                <span className="text-sm opacity-90 font-light">Plantando o futuro sustentável</span>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-green-50 opacity-90 max-w-md leading-relaxed">
              Transformamos áreas degradadas em plantações produtivas de banana, capturando CO₂ e alimentando famílias carentes.
            </p>

            {/* Ícones Sociais */}
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-green-400/50 flex items-center justify-center hover:bg-green-700 hover:border-transparent transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Botão Amarelo */}
            <button className="bg-[#FBC02D] hover:bg-[#e0ac26] text-green-950 font-bold py-3 px-8 rounded shadow-sm transition-colors mt-2">
              Adote uma Bananeira
            </button>
          </div>

          {/* Coluna 2: Links Rápidos (Ocupa 3 colunas) */}
          <div className="md:col-span-3 pt-2">
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-green-50/90">
              <li><a href="#" className="hover:text-white hover:underline transition-all">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Nossa Missão</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">Impacto</a></li>
              <li><a href="#" className="hover:text-white hover:underline transition-all">FAQ</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato (Ocupa 3 colunas) */}
          <div className="md:col-span-3 pt-2">
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-green-50/90 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 opacity-80" />
                <span>contato@carbonocombanana.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 opacity-80" />
                <span>(11) 9 9999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 opacity-80 mt-1" />
                <span>Rio Grande do Norte, RN</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-green-400/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left relative">
          
          {/* Copyright (Esquerda) */}
          <p className="text-xs text-green-100/60 order-3 md:order-1">
            © 2024 Carbono com Banana. Todos os direitos reservados.
          </p>

          {/* Métrica Central (Destaque) */}
          <div className="order-1 md:order-2 flex flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4">
            <span className="text-3xl md:text-4xl font-extrabold text-[#FBC02D]">
              +380 ton
            </span>
            <span className="text-xs md:text-sm text-green-50 opacity-90">
              CO₂ que vamos capturar este ano
            </span>
          </div>

          {/* Links Legais (Direita) */}
          <div className="flex gap-6 text-xs text-green-100/80 order-2 md:order-3">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>

        </div>
      </div>
    </footer>
  );
}