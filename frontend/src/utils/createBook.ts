import { v4 as uuidv4 } from 'uuid'
import { IBook } from '../types/books'

export const createBook = (book: IBook, source: string) => {
  return {
    ...book,
    id: uuidv4(),
    isFavorite: false,
    source,
  }
}
