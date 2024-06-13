import Nav from '@/app/components/Nav/Nav'
import Header from '../../components/Header/Header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header />
      <div className="flex p-8">
        <Nav />
        <div className="w-full pl-8">{children}</div>
      </div>
    </div>
  )
}
