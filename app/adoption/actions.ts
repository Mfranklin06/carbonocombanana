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

  // Pega a URL base do ambiente ou fallback para produção
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://carbonocombanana.vercel.app";

  const preference = new Preference(client);

  try {
    const response = await preference.create({
      body: {
        items: itens.map((item) => ({
          id: item.titulo,
          title: item.titulo,
          quantity: item.quantidade,
          unit_price: item.precoUnitario,
          currency_id: "BRL",
        })),
        back_urls: {
          success: `${baseUrl}/sucesso`,
          failure: `${baseUrl}/erro`,
          pending: `${baseUrl}/pendente`,
        },
        auto_return: "approved",
      },
    });

    if (response.init_point) {
      return { success: true, url: response.init_point };
    } else {
      return { success: false, error: "Não foi possível gerar o link de pagamento" };
    }
  } catch (error: unknown) {
    console.error("Erro MP:", error);
    return {
      success: false,
      error: `Erro ao criar preferência de pagamento`
    };
  }
}