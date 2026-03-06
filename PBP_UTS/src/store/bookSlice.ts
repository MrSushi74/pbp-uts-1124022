import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { AsyncDataState, book} from "../types";

export type bookSlice = {
    bookList: book[];
    bookState: AsyncDataState;
}

const initialState: bookSlice = {
    bookList: [],
    bookState: "pending"
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook: (state, action: PayloadAction<book[]>) => {
            state.bookList = action.payload;
        },
        setBookState: (state, action: PayloadAction<AsyncDataState>) => {
            state.bookState = action.payload;
        }
    }
})

export const bookActions = bookSlice.actions;
export const bookReducer = bookSlice.reducer;