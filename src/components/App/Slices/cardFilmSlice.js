import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../../App";

const initialState = {
    item: [],
    loading: false,
    error: '',
}

export const fetchCardFilm = createAsyncThunk (
    'card/fetchCardFilms',
    async (imdbID) => {
        try {
            const response = await fetch(url + 'i=' + imdbID);

            if (!response.ok) {
                throw  new Error('Такого фильма нет');
            }

            return await response.json();
        } catch (e) {
            throw new Error(e);
        }
    }
)

export const cardFilmSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        clear: (state) => {
            state.item = []
        },
        load: (state) => {
            state.loading = !state.loading
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCardFilm.pending, (state) => {
                state.loading = true;
                state.error = ''
            })
            .addCase(fetchCardFilm.fulfilled, (state, action) => {
                state.item = action.payload
                state.loading = false;
                state.error = ''
            })
            .addCase(fetchCardFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})


export const { clear } = cardFilmSlice.actions
export default cardFilmSlice.reducer