// data/posts.ts

interface Post {
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  contentHtml: string
}

const posts: Post[] = [
  // ===================== 2025 =====================
  {
    title: 'FAST 2025 – Engenharia de Qualidade',
    slug: 'fast-2025-engenharia-qualidade',
    date: '2025',
    category: 'Engenharia de Qualidade',
    excerpt: 'Participando do FAST 2025, aprimorando qualidade de software, automação de testes e práticas DevOps.',
    contentHtml: `<p>Imersa no FAST 2025, explorando qualidade de código, testes automatizados, integração contínua e práticas DevOps. Cada desafio fortalece habilidades técnicas e soft skills, como colaboração e resolução de problemas.</p>`,
  },
  {
    title: 'Projeto Desenvolve – Grupo Boticário',
    slug: 'projeto-desenvolve-boticario',
    date: '2025',
    category: 'Projetos',
    excerpt: 'Participação ativa no projeto full-stack, colaborando com soluções práticas.',
    contentHtml: `<p>Desenvolvi funcionalidades em Front-End e Back-End, participei de sprints e refinei habilidades em equipe, comunicação e organização.</p>`,
  },
  {
    title: 'Formação Back-End ONE',
    slug: 'formacao-backend-one',
    date: '2025',
    category: 'Back-End',
    excerpt: 'Desenvolvendo habilidades em Back-End, APIs e banco de dados na ONE.',
    contentHtml: `<p>Aprendi Node.js, criação de APIs REST, integração com banco de dados e autenticação de usuários. Os desafios práticos reforçaram minha capacidade de construir sistemas completos e confiáveis.</p>`,
  },
  {
    title: 'Bootcamp DIO',
    slug: 'bootcamp-dio',
    date: '2025',
    category: 'Back-End / Front-End',
    excerpt: 'Participação em bootcamp completo de desenvolvimento Full-Stack na DIO.',
    contentHtml: `<p>Durante o bootcamp, desenvolvi projetos práticos em Front-End e Back-End, resolvendo desafios reais e aprimorando minhas habilidades em React, Node.js, APIs e bancos de dados.</p>`,
  },
  {
    title: 'Trilhas de Inteligência Artificial',
    slug: 'trilhas-inteligencia-artificial',
    date: '2025',
    category: 'Inteligência Artificial',
    excerpt: 'Exploração de trilhas de IA, aprendizado de modelos e aplicações práticas.',
    contentHtml: `<p>Estudei fundamentos de IA, machine learning e NLP, aplicando conhecimentos em pequenos projetos e experimentos práticos, conectando teoria com experiência real.</p>`,
  },

  // ===================== 2024 =====================
  {
    title: 'Formação Front-End ONE',
    slug: 'formacao-front-end-one',
    date: '2024',
    category: 'Front-End',
    excerpt: 'Aprofundamento em React, HTML, CSS e JavaScript.',
    contentHtml: `<p>Estudei React, hooks, componentes reutilizáveis e boas práticas de acessibilidade, consolidando conhecimentos de Front-End e UX/UI.</p>`,
  },
  {
    title: 'UX/UI Design',
    slug: 'ux-ui-design',
    date: '2024',
    category: 'UX/UI',
    excerpt: 'Aprendizado em design de interfaces e experiência do usuário na Salvador Tech.',
    contentHtml: `<p>Aprendi sobre cores, tipografia, protótipos interativos e princípios de UX. Cada exercício reforçou a sensibilidade para criar interfaces impactantes.</p>`,
  },
  {
    title: 'Curso de Design Gráfico',
    slug: 'curso-design-grafico',
    date: '2024',
    category: 'Design Gráfico',
    excerpt: 'Aprofundamento em técnicas de design gráfico e comunicação visual.',
    contentHtml: `<p>Estudei composição visual, cores, tipografia e softwares de design. Aprimorei habilidades para criar layouts harmônicos e atraentes.</p>`,
  },
  {
    title: 'Descodificadas',
    slug: 'descodificadas',
    date: '2024',
    category: 'Projetos',
    excerpt: 'Avançando na Trilha 3 da iniciativa Descodificadas, fortalecendo habilidades em Front-End.',
    contentHtml: `<p>Prática em Front-End avançado, integração de componentes e boas práticas de desenvolvimento web, ampliando competências técnicas e experiência de usuário.</p>`,
  },
  {
    title: 'Imersões da Alura – Front-End e Back-End',
    slug: 'imersoes-alura-2024',
    date: '2024',
    category: 'Front-End / Back-End',
    excerpt: 'Participação em imersões práticas da Alura, aplicando aprendizado em projetos reais.',
    contentHtml: `<p>Realizei várias imersões em Front-End e Back-End, consolidando conhecimento em React, JavaScript, Node.js e bancos de dados através de desafios práticos e hands-on.</p>`,
  },

  // ===================== 2023 =====================
  {
    title: 'ElasNaTech, Proz e Salvador Tech',
    slug: 'cursos-iniciais-front-end',
    date: '2023',
    category: 'Front-End',
    excerpt: 'Cursos de capacitação inicial em Front-End, reforçando conceitos básicos.',
    contentHtml: `<p>Estudei linguagens básicas e prática em projetos simples. Esses cursos me deram confiança para mergulhar mais fundo em desenvolvimento web.</p>`,
  },
  {
    title: 'Cursos e Conteúdos YouTube',
    slug: 'cursos-youtube',
    date: '2023',
    category: 'Front-End / Back-End',
    excerpt: 'Aprendizado complementar em desenvolvimento web através de conteúdos gratuitos.',
    contentHtml: `<p>Explorei tutoriais de YouTube para reforçar aprendizado em HTML, CSS, JavaScript e conceitos iniciais de Back-End, aplicando o conhecimento em mini projetos.</p>`,
  },
]

export default posts
