import { Inter } from 'next/font/google'
import './globals.css'
import App from './components/app'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}