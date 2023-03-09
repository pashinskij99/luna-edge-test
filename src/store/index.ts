import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./services/films";
import {setupListeners} from '@reduxjs/toolkit/query'
import filmSearchParamsReducer from './services/filmSearchParams'
import FavoriteReducer from './services/favorite'

export const store = configureStore({
  reducer: {
    filmSearchParams: filmSearchParamsReducer,
    favorite: FavoriteReducer,
    [filmsApi.reducerPath]: filmsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch