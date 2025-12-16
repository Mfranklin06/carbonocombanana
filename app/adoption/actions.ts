// app/adoption/actions.ts
"use server";

import { Preference, MercadoPagoConfig } from "mercadopago";

const accessToken = process.env.MP_ACCESS_TOKEN;

const client = new MercadoPagoConfig({
  accessToken: accessToken || "",
});

interface ItemAdocao {
  titulo: string;
  quantidade: number;
  precoUnitario: number;
}

export async function criarCheckoutAdocao(itens: ItemAdocao[]) {
  if (!accessToken) {
    console.error("Token do Mercado Pago não encontrado");
    return { success: false, error: "Erro de configuração no servidor." };
  }

  // 1. Definição robusta da Base URL
  // Garante que não tenha barra no final para não duplicar (ex: .com//sucesso)
  const baseUrl = "https://carbonocombanana.vercel.app";

  console.log("🔗 Base URL detectada:", baseUrl); // DEBUG: Veja isso no terminal do VS Code

  const preference = new Preference(client);

  try {
    const preferenceData = {
      body: {
        items: itens.map((item) => ({
          id: item.titulo, // Boa prática: usar um ID único se tiver, ou o título
          title: item.titulo,
          quantity: item.quantidade,
          unit_price: item.precoUnitario,
          currency_id: "BRL",
        })),
        back_urls: {
          success: `${baseUrl}/sucesso`, // Deve ficar: http://localhost:3000/sucesso
          failure: `${baseUrl}/erro`,
          pending: `${baseUrl}/pendente`,
        },
        auto_return: "approved",
      },
    };

    // DEBUG: Verifique se o objeto back_urls está correto antes de enviar
    console.log("📦 Payload enviado ao MP:", JSON.stringify(preferenceData.body.back_urls, null, 2));

    const response = await preference.create(preferenceData);

    if (response.init_point) {
      return { success: true, url: response.init_point };
    } else {
      return { success: false, error: "Não foi possível gerar o link de pagamento" };
    }
  } catch (error: unknown) {
    console.error("❌ Erro MP:", error);
    return {
      success: false,
      error: `Erro detalhado: ${error instanceof Error ? JSON.stringify(error, Object.getOwnPropertyNames(error)) : JSON.stringify(error)}`
    };
  }
}