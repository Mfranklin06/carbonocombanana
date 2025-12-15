'use client' // Importante pois tem interatividade (onClick)

import { criarPreferencia } from './actions';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>Produto: Curso Next.js</h1>
      <p>Valor: R$ 100,00</p>
      
      {/* Ao clicar no botão, ele chama a Server Action.
        O formulário é a maneira mais semântica de disparar Server Actions,
        mas você poderia usar um onClick simples também.
      */}
      <form action={criarPreferencia}>
        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Pagar com Mercado Pago
        </button>
      </form>
    </div>
  );
}