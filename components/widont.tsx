type Props = {
  children: string
}

export const Widont = ({ children }: Props) => (
  <>{children.replace(/ ([^ ]+)$/, '\u00A0$1')}</>
)
