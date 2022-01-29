import Link from 'next/link'

export interface TitleProps {
  className?: string
}

export const Title = ({ className }: TitleProps) => (
  <div className={className ? className : 'py-20'}>
    <Link href="/">
      <a className="hover:underline">
        <h1 className="text-center text-4xl">Ethan Mick</h1>
      </a>
    </Link>
  </div>
)
