import { Routes } from 'lib/routes'
import Link from 'next/link'

const navigation = [
  {
    name: 'Posts',
    href: Routes.Posts,
  },
  {
    name: 'Refs',
    href: Routes.Refs,
  },
  {
    name: 'About',
    href: Routes.About,
  },
]

export const Header = () => (
  <header className="py-2 shadow">
    <div className="container mx-auto flex items-center justify-between">
      <Link href={Routes.Home}>
        <a className="text-2xl">Ethan Mick</a>
      </Link>
      <nav>
        {navigation.map((link) => (
          <Link href={link.href} key={link.name}>
            <a className="ml-8 text-base font-medium text-black hover:text-gray-800 hover:underline">
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  </header>
)
