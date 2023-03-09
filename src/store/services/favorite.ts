import { IFilm } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  films: IFilm[]
}

const initialState: InitialState = {
  films: []
}

const favoriteSlice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    setFilm(state, action){
      state.films = [...state.films, action.payload]
    }
  }
})

export const {setFilm} = favoriteSlice.actions
export default favoriteSlice.reducer