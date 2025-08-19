import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoYe Studio - 모두의예체능',
  description: '🎨 하버드, 예일, MIT 출신 전문 강사와 함께하는 예체능 유학 준비! 실기+어학 통합 교육으로 꿈의 대학 진학을 현실로 만들어보세요 ✨',
  keywords: '예체능, 유학, 포트폴리오, 실기, 미술, 음악, 디자인, 하버드, 예일, MIT, 파슨스',
  authors: [{ name: 'MoYe Studio' }],
  openGraph: {
    title: 'MoYe Studio - 모두의예체능 🎨',
    description: '🎯 하버드·예일·MIT 출신 전문 강사진\n⚡ 실기+어학 통합 교육 시스템\n👨‍🎓 맞춤형 1:1 포트폴리오 완성\n\n예체능 유학의 꿈을 현실로! 지금 무료 상담 받아보세요 ✨',
    type: 'website',
    url: 'https://3000-iqxan33umawndpdl0aeei-6532622b.e2b.dev',
    siteName: 'MoYe Studio',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://3000-iqxan33umawndpdl0aeei-6532622b.e2b.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MoYe Studio - 예체능 유학 전문 교육 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoYe Studio - 모두의예체능 🎨',
    description: '하버드·예일·MIT 출신 강사진과 함께하는 예체능 유학 준비! 실기+어학 통합 교육으로 꿈의 대학 진학 ✨',
    images: ['https://3000-iqxan33umawndpdl0aeei-6532622b.e2b.dev/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* 카카오톡 공유 최적화 */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}