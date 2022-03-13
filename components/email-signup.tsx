import React, { useState } from 'react'
import { Spinner } from './spinner'

export const EmailSignup = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/email/signup', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setSuccess(res.status === 200)
    } catch (error: any) {
      setError(error.message)
    }
    setLoading(false)
  }
  return (
    <div className="text-center">
      <h2 className="mb-4 text-4xl font-bold">Be the best web developer you can be.</h2>
      <h3 className="text-xl text-slate-700">
        A weekly email on Next.js, React, TypeScript, Tailwind CSS, and web development.
      </h3>
      <div className="py-4">
        {!success && (
          <>
            <form onSubmit={onSubmit} className="relative mx-auto mb-2 max-w-[30rem]">
              <input
                aria-label="Email"
                type="email"
                placeholder="Your email address"
                required
                autoComplete="off"
                // className="!focus:ring-0 w-full rounded border pl-2 leading-10 focus:outline-indigo-500"
                className="w-full rounded !shadow-none !outline-none ring-inset focus:!border-indigo-500 focus:!ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 flex h-[42px] w-32 items-center justify-center rounded-r bg-indigo-500 py-2 px-3 font-semibold text-white hover:bg-indigo-600"
                disabled={loading}
              >
                {loading && <Spinner />}
                {!loading && <>Subscribe</>}
              </button>
            </form>
            {error && <div className="mb-2 bg-red-50 p-2 text-red-800">{error}</div>}
            <div className="text-sm text-slate-500">No spam. Unsubscribe any time.</div>
          </>
        )}
        {success && <div className="text-lg">Thank you so much! You&apos;re all signed up.</div>}
      </div>
    </div>
  )
}
