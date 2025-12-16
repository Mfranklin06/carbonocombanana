import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="bg-white text-gray-800 p-8">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-green-700 mb-4">Mais Detalhes</h1>
                <p className="text-lg mb-2">Se você chegou até aqui, é porque quer entender melhor como o projeto Carbono com Banana funciona na prática. E a gente ama isso! 💛</p>
                <p className="text-lg">Aqui vai um passo a passo completo:</p>
            </section>

            <section className="bg-green-50 p-6 rounded-lg shadow-md mb-12">
                <ol className="list-decimal list-inside space-y-4">
                    <li className="text-lg">Você adota um pé de banana e escolhe um nome especial para ele.</li>
                    <li className="text-lg">Agenda o dia do plantio e toda a preparação do solo é feita com carinho.</li>
                    <li className="text-lg">Recebe atualizações sobre o crescimento do seu pé de banana.</li>
                    <li className="text-lg">Contribui para a regeneração ambiental e a captura de carbono.</li>
                    <li className="text-lg">Ajuda a criar um futuro mais verde e solidário.</li>
                    <li className="text-lg">Participa de uma comunidade engajada em sustentabilidade.</li>
                    <li className="text-lg">Recebe benefícios exclusivos como certificado de adoção.</li>
                    <li className="text-lg">Tem acesso a eventos e workshops sobre regeneração ambiental.</li>
                    <li className="text-lg">Inspira outras pessoas a fazerem parte dessa história.</li>
                    <li className="text-lg">Deixa um legado positivo para as próximas gerações.</li>
                </ol>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Agora que você conhece todos os detalhes...</h2>
                <p className="text-lg mb-6">Que tal fazer parte dessa história de regeneração e amor? Cada pé de banana adotado é um passo em direção a um futuro mais verde e solidário.</p>
                <Link href="/adoption" className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition">
                    Adotar Meu Pé de Banana
                </Link>
            </section>
        </main>
    );
}