import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchAllMovies } from "./Actions/fetchAllMovies";
import { fetchSearchMovies } from "./Actions/fetchSearchMovies";
import { fetchPagenation } from "./Actions/fetchPagenation";
const initialState = { movies: [], pages: 0 };

const allMovies = createSlice({
  name: "get movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.movies;
      state.pages = action.payload.pages;
    },
    [fetchSearchMovies.fulfilled]: (state, action) => {
      state.movies = action.payload.movies;
      state.pages = action.payload.pages;
    },
    [fetchPagenation.fulfilled]: (state, action) => {
      state.movies = action.payload.movies;
      state.pages = action.payload.pages;
    },
  },
});

const store = configureStore({
  reducer: allMovies.reducer,
});

export default store;
