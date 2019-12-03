import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const json = async (url: string) => {
  const res = await fetch(`${publicRuntimeConfig.API_ROOT}/${url}`)
  const data = await res.json()
  return data
}
