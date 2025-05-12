import { v4 as uuidv4 } from 'uuid'
import { IBook, IBookWithID } from '../types/books'

export const createBook = (book: IBook, source: string): IBookWithID => {
  return {
    ...book,
    id: uuidv4(),
    isFavorite: false,
    source,
  }
}
