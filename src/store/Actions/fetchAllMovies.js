import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllMovies = createAsyncThunk(
  "get movies/fetchAllMovies",
  async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=673ca1d20606d9f382b6c7c2c3f49b66&language=ar-US&page=${page}`
    );
    const data = await response.json();
    return { movies: data.results, pages: data.total_pages };
  }
);
