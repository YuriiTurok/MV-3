import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from "@/app/components/header/Header";

const mont = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "600", "800"],
})

export const metadata: Metadata = {
  title: 'Metaverse',
  description: 'Metaverse description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
