export interface IBook {
  title: string
  author: string
}

export interface IBookWithID extends IBook {
  id: string
  isFavorite: boolean
  source: string
}
