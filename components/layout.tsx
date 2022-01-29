import cx from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import { Footer } from './footer'
import { Header } from './header'

export const Main = ({
  className,
  children,
}: ComponentPropsWithoutRef<'main'>) => (
  <main className={cx('container mx-auto max-w-3xl px-4', className)}>
    {children}
  </main>
)

type Props = {
  className?: string
  children: React.ReactNode
}

export const Layout = ({ children, className }: Props) => (
  <>
    <Header />
    <Main className={className}>{children}</Main>
    <Footer />
  </>
)
