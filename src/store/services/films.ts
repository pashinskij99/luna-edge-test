import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { _api, _apiKey } from '@/constants'
import { IFilmFull, IFilmResult } from '@/types/interfaces'

interface SearchInfo {
  name: string
  page: number
}

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({baseUrl: _api}),
  endpoints: (builder) => ({
    getFilmsByName: builder.query<IFilmResult, SearchInfo>({
      query: (searchInfo) => `?apikey=${_apiKey}&s=${searchInfo.name}&page=${searchInfo.page}`
    }),
    getFilmById: builder.query<IFilmFull, string>({
      query: (id) => `?apikey=${_apiKey}&i=${id}`
    })
  })
})

export const { useGetFilmsByNameQuery, useGetFilmByIdQuery } = filmsApi