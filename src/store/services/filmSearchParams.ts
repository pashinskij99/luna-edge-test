import {createSlice} from '@reduxjs/toolkit'

interface InitialState {
  name: string
  page: number
}
const initialState: InitialState = {
  name: 'iron',
  page: 1
}

export const filmSearchParamsSlice = createSlice({
  name: 'filmSearchParams',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
    setPageNumber(state, action) {
      state.page = action.payload
    }
  }
})

export const {setName, setPageNumber} = filmSearchParamsSlice.actions
export default filmSearchParamsSlice.reducer