import { readAllSnippet } from '@/app/api/snippet/service'
import { db } from '@/app/lib/db'
export default async function MainPage(p: {}) {
  const snippets = await readAllSnippet()
  return <div className="text-white">{JSON.stringify(snippets)}</div>
}
