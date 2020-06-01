export const getBookCovers = async () => {
  const res = await fetch('/books')
  return await res.json()
}