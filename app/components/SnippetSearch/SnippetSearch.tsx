'use client'

import SearchBar from '../SearchBar/SearchBar'

export default function SnippetSearch(p: { placeholder: string }) {
  return (
    <div>
      <SearchBar placeholder={p.placeholder} onChange={(t) => console.log(t)} />
      {/** a list of snippets */}
    </div>
  )
}
