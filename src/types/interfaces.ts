import { ResponseType } from "./types"

export interface IFilm {
  Poster: string 
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface IFilmResultError {
  Error: string 
  Response: ResponseType
}

export interface IFilmResult extends IFilmResultError {
  Search: IFilm[],
  totalResults: string,
  Response: ResponseType
}

interface Rating {
  Source: string
  Value: string
}

export interface IFilmFull extends IFilm, IFilmResultError {
  Ratings: Rating[]
  Writer: string
  Actors: string
  Plot: string
  Metascore: string
  imdbRating: string
}