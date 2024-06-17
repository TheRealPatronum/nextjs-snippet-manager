import { readAllSnippet } from '@/app/api/snippet/service'
import SnippetSearch from '@/app/components/SnippetSearch/SnippetSearch'

import { getTranslations } from 'next-intl/server'

export default async function MainPage(p: {}) {
  const { data: snippets } = await readAllSnippet()
  const t = await getTranslations('main')

  return (
    <SnippetSearch snippets={snippets} placeholder={t('searchPlaceholder')} />
  )
}
