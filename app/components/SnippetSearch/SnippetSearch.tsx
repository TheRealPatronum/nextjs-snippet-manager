'use client'

import { Snippet } from '@prisma/client'
import SearchBar from '../SearchBar/SearchBar'
import SnippetList from '../SnippetList/SnippetList'

export default function SnippetSearch(p: {
  placeholder: string
  snippets: Snippet[]
}) {
  return (
    <div>
      <SearchBar placeholder={p.placeholder} onChange={(t) => console.log(t)} />
      {/** a list of snippets */}
      <div className="overflow-y-auto h-[80vh] pb-20">
        <SnippetList snippets={p.snippets} />
      </div>
    </div>
  )
}
