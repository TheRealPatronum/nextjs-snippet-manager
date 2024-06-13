import { SNIPPETS_METADATA, SnippetMetadata } from '@/app/constant'
import { Snippet } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav(p: {}) {
  const renderLinkItem = (snippetMetadata: SnippetMetadata) => {
    return (
      <li
        key={snippetMetadata.technology}
        className="transition transform hover:scale-125"
      >
        <Link
          href={`/snippets/technology/${snippetMetadata.technology}`}
          className="flex items-center gap-4 font-semibold"
        >
          <Image
            src={snippetMetadata.src}
            alt={`icon for ${snippetMetadata.label}`}
            width={30}
            height={30}
          />
          {snippetMetadata.label}
        </Link>
      </li>
    )
  }
  return (
    <div className="text-white bg-main-900 py-8 px-6 text-sm rounded-lg">
      <ul className="space-y-4">
        {Object.values(SNIPPETS_METADATA).map(renderLinkItem)}
      </ul>
    </div>
  )
}
