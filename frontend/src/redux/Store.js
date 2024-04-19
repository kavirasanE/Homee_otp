import {configureStore} from '@reduxjs/toolkit'
import FavouriteSlice from './FavouriteSlice'

export const store =configureStore({
    reducer:{
        favourites: FavouriteSlice,
    },
})