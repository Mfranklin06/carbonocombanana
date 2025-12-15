// app/actions.ts
'use server'

import { MercadoPagoConfig, Preference } from 'mercadopago';
import { redirect } from 'next/navigation';

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN! 
});

export async function criarPreferencia() {
  const preference = new Preference(client);
  let urlRedirecionamento = ''; // Variável para guardar o link

  try {
    const response = await preference.create({
      body: {
        items: [
          {
            id: 'prod_123',
            title: 'Produto Teste',
            quantity: 1,
            unit_price: 100.00,
            currency_id: 'BRL',
          },
        ],
        // ATENÇÃO AQUI: É 'back_urls' (plural)
        back_urls: {
          success: 'http://localhost:3000/sucesso', 
          failure: 'http://localhost:3000/erro', 
          pending: 'http://localhost:3000/pendente',
        },
        auto_return: 'approved',
      },
    });

    // Apenas guardamos a URL aqui, não chamamos o redirect ainda
    if (response.init_point) {
        urlRedirecionamento = response.init_point;
    } else {
        throw new Error("Link não gerado pelo Mercado Pago");
    }

  } catch (error) {
    console.error("Erro ao criar preferência:", error);
    return; // Retorna sem fazer nada se der erro na API
  }

  // O redirect deve ficar FORA do try/catch no Next.js
  if (urlRedirecionamento) {
    redirect(urlRedirecionamento);
  }
}