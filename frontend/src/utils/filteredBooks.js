export const filteredBooks = (arr, filterTitle, filterAuthor, filterFavorite) =>
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
