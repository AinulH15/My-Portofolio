import './globals.css'

export const metadata = {
  title: 'Ainul Hidayah - Portfolio',
  description: 'Final Year Informatics Student & Aspiring Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8E7]">{children}</body>
    </html>
  )
}