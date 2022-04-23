type CreatedAt = {
  createdAt: string
}

export const sortByCreatedAt = (a: CreatedAt, b: CreatedAt) =>
  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
