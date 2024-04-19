import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    bookmarkColorState: false,
    FavouritesState: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [],
    value: 0,
}
export const FavouriteSlice = createSlice({
    name: 'favourites',
    initialState,

    reducers: {
        increment: (state,action) => {
            state.value += 1
        },
        bookmarkColor: (state,action) => {
            state.bookmarkColorState = action.payload.bookmarkColorState;
        },
        addToFav: (state, action) => {
            // state.FavouritesState = [];
            const itemIndex = state.FavouritesState.findIndex((item) => item.id === action.payload.id);
            if (itemIndex < 0) {
                const temp = { ...action.payload ,};
                state.FavouritesState.push(temp);
                console.log(temp);
                 state.value +=1
                localStorage.setItem("favourites", JSON.stringify(state.FavouritesState,state.value))
            }else {
                const fav = state.FavouritesState.filter((item) => item.id != action.payload.id);
                state.FavouritesState =fav;
                console.log(fav);
                state.value -= 1;
                localStorage.setItem("favourites", JSON.stringify(state.FavouritesState,state.value))
            }
        }
    }
})

export const selectedFavourites = (state) => state.favourites.FavouritesState
export const selectedBookmark =(state) => state.favourites.bookmarkColorState
export const { increment, addToFav,bookmarkColor } = FavouriteSlice.actions
export default FavouriteSlice.reducer