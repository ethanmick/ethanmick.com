import { AcademicCapIcon, CodeIcon } from '@heroicons/react/outline'
import { Footer, Header, Widont } from 'components'

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="hero h-[calc(100vh - theme('spacing.12'))] flex flex-col items-center justify-center text-center">
        <h1 className="mb-8 px-4 text-4xl font-semibold md:text-6xl">
          <Widont>I design, code, and ship web apps</Widont>
        </h1>
        <h2 className="text-2xl font-light md:text-4xl">
          From <span className="text-indigo-500">small business</span> to{' '}
          <span className="text-rose-500">enterprise</span>
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <section className="pb-24 md:pb-48">
          <AcademicCapIcon className="my-4 h-16 w-16 rounded-full border border-indigo-200 p-2 text-indigo-500" />
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Teaching Software Engineering
          </h3>
          <div className="">
            <p className="prose">
              I think everyone should learn to code, at least a little. I love
              teaching people to learn software engineering fundamentals, new
              tricks in their favorite tech stack, or new ways to design a
              solution to a problem.
            </p>
            {/* <ul>
              <li className="bg-gradient-to-r from-indigo-500 to-rose-500">
                Learn Next.js
              </li>
              <li>Learn React</li>
              <li>Learn TypeScript</li>
            </ul> */}
          </div>
        </section>

        <section>
          <CodeIcon className="my-4 h-16 w-16 rounded-full border border-indigo-200 p-2 text-indigo-500" />
          <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Building Software
          </h3>
          <p className="prose">
            Currently working at{' '}
            <span className="font-semibold text-indigo-500">Syniti</span>, I
            spend a lot of my time understanding the problems our customers
            face. I like to know how they currently solve their problems, what
            their largest pain points are, and how we can deliver software that
            will delight them.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}
