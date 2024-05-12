import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    loading: false,
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFilm (state, action) {
            if (!state.item.some(film => action.payload.imdbID === film.imdbID)) {
                state.item.push(action.payload)
            }
        },
        removeFilm (state, action) {
            state.item = state.item.filter((film) => film.imdbID !== action.payload)
        }
    },
})

export const filmsFavourites = (state) => state.favourites.item;
export const { addFilm, removeFilm } = favouritesSlice.actions;
export default favouritesSlice.reducer;
