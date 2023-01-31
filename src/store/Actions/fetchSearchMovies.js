import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchMovies = createAsyncThunk(
  "get movies/fetchSearchMovies",
  async (word) => {
    if (word !== "") {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=673ca1d20606d9f382b6c7c2c3f49b66&query=${word}&language=ar`
      );
      const data = await response.json();
      return { movies: data.results, pages: data.total_pages };
    } else {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=673ca1d20606d9f382b6c7c2c3f49b66&language=ar`
      );
      const data = await response.json();
      return { movies: data.results, pages: data.total_pages };
    }
  }
);
