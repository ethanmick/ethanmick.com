import * as React from 'react'

export interface TitleProps {
  className?: string
}

export const Title = ({ className }: TitleProps) => (
  <div className={className ? className : 'p-40'}>
    <h1 className="text-4xl text-center">Ethan Mick</h1>
  </div>
)
