import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoYe Studio - 모두의예체능',
  description: '예체능 유학 준비를 위한 전문 교육 플랫폼',
  keywords: '예체능, 유학, 포트폴리오, 실기, 미술, 음악, 디자인',
  authors: [{ name: 'MoYe Studio' }],
  openGraph: {
    title: 'MoYe Studio - 모두의예체능',
    description: '예체능 유학 준비를 위한 전문 교육 플랫폼',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}