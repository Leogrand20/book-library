import { IBookWithID } from '../types/books'

export const filteredBooks = (
  arr: IBookWithID[],
  filterTitle: string,
  filterAuthor: string,
  filterFavorite: boolean,
) =>
  arr.filter((book) => {
    const titleMatches = book.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase())

    const authorMatches = book.author
      .toLowerCase()
      .includes(filterAuthor.toLowerCase())

    const favoriteMatches = filterFavorite ? book.isFavorite : book

    return titleMatches && authorMatches && favoriteMatches
  })
