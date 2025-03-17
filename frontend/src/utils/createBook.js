import { v4 as uuidv4 } from 'uuid'

export const createBook = (book) => {
  return {
    ...book,
    id: uuidv4(),
    isFavorite: false,
  }
}
