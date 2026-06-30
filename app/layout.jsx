import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Adib Mahi | Frontend Developer',
  description:
    'Frontend Developer specializing in React.js, Vite, JavaScript, and Tailwind CSS. Building modern, responsive, and user-focused web applications with clean code and scalable solutions.',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}