// app/sucesso/page.tsx
import Link from "next/link";

type Props = {
  searchParams: {
    payment_id?: string;
    status?: string;
  }
}

export default function SucessoPage({ searchParams }: Props) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-green-600">Pagamento Aprovado!</h1>
      <p>ID do pagamento: {searchParams.payment_id}</p>
      <p>Status: {searchParams.status}</p>
      
      <Link href="/" className="mt-5 block text-blue-500 underline">
        Voltar para a loja
      </Link>
    </div>
  );
}