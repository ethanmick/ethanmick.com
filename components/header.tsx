import cx from 'classnames'
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
    className: 'hidden',
  },
]

export const Header = () => (
  <header className="py-4">
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center md:divide-x md:leading-10">
        <Link href={Routes.Home}>
          <a className="pr-6 text-2xl">Ethan Mick</a>
        </Link>
        <span className="hidden pl-6 font-light text-slate-600 md:inline-block">
          Learn, build, ship.
        </span>
      </div>
      <nav>
        {navigation.map((link) => (
          <Link href={link.href} key={link.name}>
            <a
              className={cx(
                'ml-8 text-base font-medium text-black hover:text-slate-800 hover:underline',
                link.className
              )}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  </header>
)
