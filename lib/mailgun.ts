export const parseError = (err: any) => {
  try {
    const details = JSON.parse(err.details)
    return details.message
  } catch {}
  return err.message
}
