import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { frFR, svSE, enUS } from '@clerk/localizations'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snipia',
  description: 'The one place for all your code snippets',
}

const clerkI18n = {
  fr: frFR,
  en: enUS,
  se: svSE,
}

export default async function RootLayout(
  p: Readonly<{
    children: React.ReactNode
    params: { locale: 'en' | 'fr' | 'se' }
  }>,
) {
  const messages = await getMessages()

  return (
    <ClerkProvider
      localization={clerkI18n[p.params.locale]}
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#d44700' },
        elements: { card: 'bg-main-700 shadow-none' },
      }}
    >
      <html lang={p.params.locale}>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <Toaster richColors />
            {p.children}
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
