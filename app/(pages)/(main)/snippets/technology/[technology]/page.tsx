import SnippetSearch from '@/app/components/SnippetSearch/SnippetSearch'

export default function TechnologyPage(p: { params: { technology: string } }) {
  return (
    <div>
      <SnippetSearch
        placeholder={`Search your ${p.params.technology} snippets`}
      />
    </div>
  )
}