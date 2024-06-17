'use client'
import { TbWorld } from 'react-icons/tb'
import Link from 'next/link'
import Image from 'next/image'
import logoPng from '/public/logo.png'
import { UserButton } from '@clerk/nextjs'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export default function Header(p: {}) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  // TODO ADD FLAGSELECT DROPDOWN
  const toggleLanguage = () => {
    router.replace(
      (locale === 'en' ? '/fr' : '/en') + pathname.split('/' + locale)[1],
    )
  }

  return (
    <header className="bg-main-700 p-8 flex justify-between items-center">
      <Link href="/">
        <Image src={logoPng} alt="Logo" className="w-48" />
      </Link>
      <div className="flex items-center justify-center space-x-12">
        <TbWorld
          className="text-white hover:text-white/80 cursor-pointer"
          onClick={toggleLanguage}
        />
        <div className="w-12">
          <UserButton
            afterSignOutUrl={
              '/' + locale + process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL
            }
          />
        </div>
      </div>
    </header>
  )
}
