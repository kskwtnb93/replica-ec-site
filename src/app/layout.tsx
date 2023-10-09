import 'the-new-css-reset/css/reset.css'
import './globals.scss'

import { css } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

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
            background-color: #f8f8f8;
          `}
        >
          <Header />
          <main
            className={css`
              flex: 1;
              overflow-x: hidden;
            `}
          >
            {children}
          </main>
          <Footer />
        </body>
      </KumaRegistry>
    </html>
  )
}
