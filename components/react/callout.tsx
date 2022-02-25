type Props = {
  children: React.ReactNode
}

export const Callout = ({ children }: Props) => (
  <aside className="my-8 rounded bg-sky-100 p-8">{children}</aside>
)
