import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'Blog SowzaTech',
  description:
    'Diário de transição de carreira e aprendizados de Tatiane Souza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-brand-dark text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
