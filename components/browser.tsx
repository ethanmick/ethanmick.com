import cx from 'classnames'

type ButtonProps = {
  className?: string
  color: 'red' | 'yellow' | 'green'
}

const colors = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
}

const WindowButton = ({ className, color }: ButtonProps) => {
  const bg = colors[color]
  return (
    <span className={cx('inline-block h-4 w-4 rounded-full', bg, className)} />
  )
}

type Props = {
  title: string
  src: string
  /**
   * User friendly url for the window
   */
  url: string
}

export const Browser = ({ src, title, url }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="grid grid-cols-6 border-b py-2">
        <div className="flex items-center justify-center">
          <WindowButton color="red" />
          <WindowButton color="yellow" className="ml-2" />
          <WindowButton color="green" className="ml-2" />
        </div>
        <div className="col-span-4 rounded-full border text-center text-sm leading-8 text-slate-500">
          {url}
        </div>
      </div>
      <iframe title={title} src={src} className="h-96 w-full"></iframe>
    </div>
  )
}
