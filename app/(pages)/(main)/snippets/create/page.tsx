'use client'
import { SNIPPETS_METADATA } from '@/app/constant'

export default function CreateSnippetPage(p: {}) {
  const inputTitle = (
    <div className="space-y-3 w-72">
      <label htmlFor="title">Title</label>
      <input id="title" />
    </div>
  )

  const textAreaContent = (
    <div className="space-y-3">
      <label htmlFor="content">Content</label>
      <textarea id="content" className="h-96" />
    </div>
  )

  const technoSelect = (
    <div className="space-y-3 w-80">
      <label htmlFor="technology">Framework / Technology / Language</label>
      <select id="technology">
        {Object.keys(SNIPPETS_METADATA).map((technologyKey) => {
          const { technology, label } = SNIPPETS_METADATA[technologyKey]
          return (
            <option key={technology} value={technology}>
              {label}
            </option>
          )
        })}
      </select>
    </div>
  )

  return (
    <form onSubmit={() => alert('todo')} className="space-y-8 w-[50rem]">
      <div className="space-y-6">
        <h1>New snippet</h1>
        {inputTitle}
        {technoSelect}
        {textAreaContent}
      </div>
      <div className="flex justify-end">
        <button>Save</button>
      </div>
    </form>
  )
}
