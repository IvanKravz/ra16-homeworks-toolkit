import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../../App";

const initialState = {
    items: [],
    loading: false,
    error: '',
}

export const fetchFilms = createAsyncThunk (
    'search/fetchFilms',
    async (name) => {
        try {
            const response = await fetch(url + 's=' + name + "&type=movie");
            
            if (!response.ok) {
                throw new Error("Ошибка HTTP: " + response.status);
            }

            return await response.json();
        } catch (e) {
            throw new Error(e);
        }
    }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
                state.error = ''
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.items = action.payload.Search
                state.loading = false;
                state.error = ''
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default searchSlice.reducer