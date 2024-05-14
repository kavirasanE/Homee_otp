import React, { useEffect, useReducer } from 'react';

export const InitialState = {
    bookmarks:[]
};

const FavouriteReducer = (state, action) => {
    switch (action.type) {
        case "add":
            console.log(13)
            return {
                ...state,
                id: action.id,
            }
        case "AddBookmark":
            console.log(action.payload);
            const updatedBookmarksAdd = [...state.bookmarks, action.payload];
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarksAdd));
            return {
                ...state,
                bookmarks: updatedBookmarksAdd
            }
        case "removeBookmark":
            console.log(action.payload);
            const filteredBookmarks = state.bookmarks.filter(bookmark => bookmark.id !== action.payload);
            localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks));
            return {
                ...state,
                bookmarks: filteredBookmarks
            }
        default:
            return state;
    }
}
export default FavouriteReducer