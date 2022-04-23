type PostedAtProps = {
  at: string
}

export const PostedAt = ({ at }: PostedAtProps) => {
  const date = new Date(at)
  const format = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
  return <span className="text-sm font-semibold text-rose-500 whitespace-nowrap min-w-[100px]">{format}</span>
}
