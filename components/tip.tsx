import { LightBulbIcon } from '@heroicons/react/outline'

type Props = {
  children: React.ReactNode
}

export const Tip = ({ children }: Props) => (
  <div className="flex items-center rounded-lg bg-sky-200 bg-opacity-40 p-2">
    <LightBulbIcon className="h-12 w-12 min-w-fit p-2 text-rose-500" />
    <span>{children}</span>
  </div>
)
