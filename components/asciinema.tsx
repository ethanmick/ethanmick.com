import { useEffect, useRef } from 'react'

type AsciinemaPlayerProps = {
  src: string
  // START asciinemaOptions
  cols: string
  rows: string
  autoPlay: boolean
  preload: boolean
  loop: boolean | number
  startAt: number | string
  speed: number
  idleTimeLimit: number
  theme: string
  poster: string
  fit: string
  fontSize: string
  // END asciinemaOptions
}

export const AsciinemaPlayer = ({ src, ...asciinemaOptions }: AsciinemaPlayerProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async function () {
      if (ref?.current) {
        ref.current.innerHTML = ''
        const AsciinemaPlayerLibrary = await import('asciinema-player')
        AsciinemaPlayerLibrary.create(src, ref.current, asciinemaOptions)
      }
    })()
  }, [src, asciinemaOptions])

  return <div ref={ref} />
}
