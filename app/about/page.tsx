import {
  Baby,
  BookOpen,
  CookingPot,
  GraduationCap,
  Music,
  PawPrint,
  Star,
} from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-white animate-fadeIn">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center text-center mb-12">
        <Image
          src="/imagem.jpg"
          alt="Tatiane Souza"
          width={150}
          height={150}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-400 mb-4">
          Sobre Mim
        </h1>
        <p className="text-purple-200 max-w-2xl">
          Oi, eu sou a <span className="font-semibold">Tatiane Souza</span> —
          mas pode chamar de <span className="text-purple-300">Tay</span> ✨.
          Minha vida é feita de ciclos, descobertas e muito aprendizado. Aqui
          você encontra algumas curiosidades que contam um pouco da minha
          jornada.
        </p>
      </div>

      {/* Curiosidades / Hobbies / Trajetória */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Universo Pessoal */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <Star className="text-purple-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Universo Pessoal
            </h3>
            <p className="text-purple-100">
              Ariana ♈, lua em Leão e ascendente em Virgem — intensidade e
              determinação são minha marca registrada.
            </p>
          </div>
        </div>

        {/* Música e Entretenimento */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <Music className="text-pink-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-pink-300 mb-2">
              Música e Entretenimento
            </h3>
            <p className="text-purple-100">
              Amo assistir <strong>desenhos animados</strong>,{' '}
              <strong>doramas</strong> e <strong>séries</strong>. E sim, sou
              fãzona do <span className="text-pink-400">BTS</span> 💜.
            </p>
          </div>
        </div>

        {/* Pets */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <PawPrint className="text-emerald-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-emerald-300 mb-2">
              Amor pelos Pets
            </h3>
            <p className="text-purple-100">
              Minha amada filhota pet{' '}
              <span className="font-semibold">Lobby</span> foi mais que um
              bichinho: foi luz, companhia e alegria que marcou minha vida para
              sempre. Sua falta é sentida em cada canto da minha rotina, mas o
              amor e as lembranças que deixou permanecem eternos, aquecendo meu
              coração e inspirando meu cuidado por todos os pets que cruzam meu
              caminho. 🐾
            </p>
          </div>
        </div>

        {/* Maternidade Solo */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <Baby className="text-rose-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-rose-300 mb-2">
              Maternidade Solo
            </h3>
            <p className="text-purple-100">
              Sou mãe solo de uma filha jovem, minha maior inspiração. Ela me
              lembra todos os dias da força que tenho e do quanto vale a pena
              seguir sonhando. Muito grata por ter ela como filha.
            </p>
          </div>
        </div>

        {/* Transição de Carreira */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <GraduationCap className="text-indigo-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Transição de Carreira
            </h3>
            <p className="text-purple-100">
              Da aréa administrativa, professora de educação infantil, caixa e
              recepcionista ao universo tech 🚀. Desde 2023 venho construindo
              minha trajetória no Front-End e além.
            </p>
          </div>
        </div>

        {/* Paixão pela Culinária */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <CookingPot className="text-orange-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              Paixão pela Culinária
            </h3>
            <p className="text-purple-100">
              Cozinhar sempre foi mais do que hobby — é uma habilidade que
              desenvolvi com carinho e criatividade.
            </p>
          </div>
        </div>

        {/* Lazer */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <Star className="text-yellow-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Lazer e Momentos
            </h3>
            <p className="text-purple-100">
              Amo aproveitar a vida com <strong>praia</strong>,{' '}
              <strong>cinema</strong> e momentos em família — tudo que recarrega
              minha energia e me faz feliz.
            </p>
          </div>
        </div>

        {/* Amor por Aprender */}
        <div className="flex items-start gap-4 bg-purple-900/30 p-6 rounded-2xl shadow-lg">
          <BookOpen className="text-yellow-400 w-7 h-7 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Amor por Aprender
            </h3>
            <p className="text-purple-100">
              Sempre gostei de explorar novos conhecimentos. Tecnologia, design,
              música, educação... aprender é a chama que guia minha vida.
            </p>
          </div>
        </div>
      </div>

      {/* Mensagem Final */}
      <div className="mt-12 text-center">
        <p className="text-purple-200 text-lg italic">
          &quot;Entre códigos, cafés e momentos em família, sou mãe, dev e
          eterna aprendiz, sempre pronta para transformar sonhos em
          realidade.&quot;
        </p>
      </div>
    </section>
  )
}
