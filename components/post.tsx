import { EmailSignup } from './email-signup'
import { Footer } from './footer'
import { Header } from './header'
import { Widont } from './widont'

export interface PostProps {
  children: React.ReactNode
  title: string
}

export const Post = ({ children, title }: PostProps) => (
  <>
    <Header />
    <main className="container prose mx-auto max-w-3xl px-4 pt-16 lg:prose-lg">
      <article className="prose mx-auto mb-40 prose-a:text-blue-600 lg:prose-lg">
        <h1 className="text-center">
          <Widont>{title}</Widont>
        </h1>
        {children}
      </article>
      <EmailSignup />
    </main>
    <Footer />
  </>
)
