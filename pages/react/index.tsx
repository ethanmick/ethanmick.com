import { Footer, Header } from 'components'
import { Routes } from 'lib'
import Link from 'next/link'

const StartNow = () => (
  <Link href={Routes.ReactIntroduction}>
    <a className="rounded bg-indigo-500 p-4 text-xl font-semibold leading-10 text-white">
      Start now for free
    </a>
  </Link>
)

const Test = {
  backgroundColor: '#ffffff',
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%230ea5e9' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
}

const whyLearn = [
  { text: 'Most popular web app library.' },
  { text: 'Build web apps and native apps.' },
  { text: 'Massive ecosystem for third party libraries.' },
  { text: 'Excellent developer tooling.' },
]

const extend = [
  {
    text: 'Next.js extends React with server side rendering.',
  },
  {
    text: 'Storybook.js for component development.',
  },
]

const WhyReact = () => (
  <section className="mx-2 border-x border-dashed py-16">
    <h2 className="-m-[1px] border-l-2 border-cyan-500 pl-2 text-3xl font-semibold text-sky-500">
      Learn
    </h2>
    <h3 className="pl-2 pb-4 pt-2 font-semibold text-slate-700">
      The{' '}
      <span className="underline decoration-pink-500 decoration-2">best</span>{' '}
      framework for app development.
    </h3>
    <ul className="-m-[1px] border-l pl-2">
      {whyLearn.map((item, i) => (
        <li key={i} className="py-1">
          {item.text}
        </li>
      ))}
    </ul>
    <h3 className="pl-2 pb-4 pt-8 font-semibold text-slate-700">
      Extend React to go{' '}
      <span className="underline decoration-pink-500 decoration-2">
        further
      </span>
      .
    </h3>
    <ul className="-m-[1px] border-l pl-2">
      {extend.map((item, i) => (
        <li key={i} className="py-1">
          {item.text}
        </li>
      ))}
    </ul>
  </section>
)

const build = [
  { text: 'Focus on the practical.' },
  { text: 'Build product and share your success.' },
  { text: 'Ship code every lesson.' },
  { text: 'From concept to production' },
]

const BuildProduct = () => (
  <section className="mx-2 border-x border-dashed py-16">
    <h2 className="-m-[1px] border-l-2 border-rose-500 pl-2 text-3xl font-semibold text-rose-500">
      Build
    </h2>
    <h3 className="pl-2 pb-4 pt-2 font-semibold text-slate-700">
      Ship{' '}
      <span className="underline decoration-amber-500 decoration-2">real</span>{' '}
      product.
    </h3>
    <ul className="-m-[1px] border-l pl-2">
      {build.map((item, i) => (
        <li key={i} className="py-1">
          {item.text}
        </li>
      ))}
    </ul>
  </section>
)

const engineer = [
  { text: 'Debug with confidence.' },
  { text: 'Understand historical context.' },
  { text: 'Learn foundation technologies.' },
  { text: 'Design code and sites.' },
]

const WhyEngineer = () => (
  <section className="mx-2 border-x border-dashed py-16">
    <h2 className="-m-[1px] border-l-2 border-amber-500 pl-2 text-3xl font-semibold text-amber-500">
      Engineer
    </h2>
    <h3 className="pl-2 pb-4 pt-2 font-semibold text-slate-700">
      Master your{' '}
      <span className="underline decoration-sky-500 decoration-2">craft</span>.
    </h3>
    <ul className="-m-[1px] border-l pl-2">
      {engineer.map((item, i) => (
        <li key={i} className="py-1">
          {item.text}
        </li>
      ))}
    </ul>
  </section>
)

const CTA = () => (
  <div className="mx-2 border-x border-dashed pb-16">
    <div className="flex justify-center py-4">
      <StartNow />
    </div>
  </div>
)

export default function ReactPage() {
  return (
    <>
      <Header />
      <div className="mx-2 border-x border-dashed pt-12">
        <div className="flex flex-col items-center gap-2 pb-12 text-5xl font-extrabold text-transparent xl:pb-24 xl:text-9xl">
          <h1 className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text leading-[5rem] xl:leading-[10rem]">
            Learn React
          </h1>
          <h1 className="bg-gradient-to-r from-rose-500 to-fuchsia-600 bg-clip-text leading-[5rem] xl:leading-[10rem]">
            Build Product
          </h1>
          <h1 className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text leading-[5rem] xl:leading-[10rem]">
            Engineer Better
          </h1>
        </div>
      </div>
      <div className="mx-2 border-x border-dashed pb-16">
        <div className="flex justify-center py-4">
          <StartNow />
        </div>
      </div>
      <div className="border-y border-dashed md:mx-2 md:border-x">
        <div className="mx-auto flex max-w-3xl flex-col">
          <WhyReact />
          <BuildProduct />
          <WhyEngineer />
          <CTA />
        </div>
      </div>
      <Footer />
    </>
  )
}
