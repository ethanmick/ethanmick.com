import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const { ROOT_URL } = publicRuntimeConfig

export const title = (title?: string) =>
  title ? `Ethan Mick | ${title}` : 'Ethan Mick'

export const url = (url: string) => ROOT_URL + url
