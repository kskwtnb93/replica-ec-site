import 'the-new-css-reset/css/reset.css'
import './globals.scss'

import { css } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/app/_components/layouts/footer'
import Header from '@/app/_components/layouts/header'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ファッション通販MOMOTOWN',
  description:
    '当サイトは某ファッションECサイトの模写サイトです。実際に購入や決済はできません。',
  icons: [
    {
      rel: 'icon',
      url: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f351.png',
    },
  ],
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <KumaRegistry>
        <body
          className={css`
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow-x: hidden;
          `}
        >
          <Header />
          <main
            className={css`
              display: flex;
              flex-direction: column;
              flex: 1;
            `}
          >
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </KumaRegistry>
    </html>
  )
}
