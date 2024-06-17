import { readAllSnippet } from '@/app/api/snippet/service'
import SnippetSearch from '@/app/components/SnippetSearch/SnippetSearch'
import { Technology } from '@prisma/client'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

export default async function TechnologyPage(p: {
  params: { technology: Technology }
}) {
  const { data: snippets } = await readAllSnippet({
    technology: p.params.technology,
  })
  const t = await getTranslations('main')
  const messages = await getMessages()
  return (
    <NextIntlClientProvider messages={messages}>
      <SnippetSearch
        snippets={snippets}
        placeholder={`Search your ${p.params.technology} snippets`}
      />
    </NextIntlClientProvider>
  )
}
