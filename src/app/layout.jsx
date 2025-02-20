import Navbar from "@/components/Navbar"


export const metadata = {
  title: 'Primer proyecto',
  description: 'Mi primer proyecto con Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  )
}
