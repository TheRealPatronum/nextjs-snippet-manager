import { readSnippet } from '@/app/api/snippet/[id]/service'
import { SnippetDetail } from '@/app/components/SnippetDetail/SnippetDetail'

export default async function SnippetDetailPage(p: { params: { id: string } }) {
  const { data: snippet } = await readSnippet(Number(p.params.id))
  if (snippet === null) {
    return <div>Snippet not found...</div>
  }
  return <SnippetDetail snippet={snippet} />
}
