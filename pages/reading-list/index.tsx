import { json } from 'utils'

interface Link {
  id: number
  link: string
  title?: string
}

interface Props {
  links: Link[]
}

const LinkRow = ({ link }: { link: Link }) => (
  <tr>
    <td className="py-3">
      <a
        className="text-blue-500 hover:underline"
        href={link.link}
        target="_blank"
        rel="noopener"
      >
        {link.title || link.link}
      </a>
    </td>
  </tr>
)

const LinkPage = ({ links }: Props) => {
  return (
    <div className="container mx-auto max-w-3xl">
      <table className="my-6">
        <tbody>
          {links.map((l) => (
            <LinkRow link={l} key={l.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

LinkPage.getInitialProps = async (): Promise<Props> => {
  const links = await json('links')
  return { links }
}

export default LinkPage
