import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}