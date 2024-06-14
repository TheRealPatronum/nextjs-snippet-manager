'use client'

import { Snippet } from '@prisma/client'
import SearchBar from '../SearchBar/SearchBar'
import SnippetList from '../SnippetList/SnippetList'
import { useState } from 'react'

export default function SnippetSearch(p: {
  placeholder: string
  snippets: Snippet[]
}) {
  const [curentSearchQuery, setCurentSearchQuery] = useState('')
  const filteredSnippets = p.snippets.filter((snippet) => {
    return [
      snippet.title,
      snippet.technology,
      snippet.language,
      snippet.content,
    ].some((snippetAttribute) =>
      snippetAttribute
        .toLocaleLowerCase()
        .includes(curentSearchQuery.toLocaleLowerCase()),
    )
  })

  return (
    <div>
      <SearchBar placeholder={p.placeholder} onChange={setCurentSearchQuery} />
      {/** a list of snippets */}
      <div className="overflow-y-auto h-[80vh] pb-20">
        <SnippetList snippets={filteredSnippets} />
      </div>
    </div>
  )
}
