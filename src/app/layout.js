import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata = {
  title: 'Ainul Hidayah - Portfolio',
  description: 'Fresh Graduate Informatics | Junior Full-Stack Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8E7]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}