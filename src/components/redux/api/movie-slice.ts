import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSearchMovies,
  fetchGenres,
  fetchPopularFilms,
  fetchTopRatedFilms,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchAccountId,
  fetchFavoriteMovies,
  fetchAddToFavoriteMovie,
  fetchRemoveToFavoriteMovie,
  fetchSearchMoviesByGenreAndYear,
} from "../api/movie-action";
import { Genre, MovieDetails, IDetailedCreditsItem } from "../../api/films-api.types";

const searchMoviesInitialState: MovieDetails[] = [];

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: searchMoviesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => action.payload);
  },
});

const genreInitialState: Genre[] = [];

const genreSlice = createSlice({
  name: "genres",
  initialState: genreInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => action.payload);
  },
});

const popularInitialState: MovieDetails[] = [];

const popularFilmsSlice = createSlice({
  name: "popularFilms",
  initialState: popularInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularFilms.fulfilled, (state, action) => action.payload);
  },
});

const topRatedInitialState: MovieDetails[] = [];

const topRatedFilmsSlice = createSlice({
  name: "topRatedFilms",
  initialState: topRatedInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopRatedFilms.fulfilled, (state, action) => action.payload);
  },
});

const movieDetailsInitialState: MovieDetails[] = [];

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: movieDetailsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const movieCreditsInitialState: IDetailedCreditsItem[] = [];

const movieCreditsSlice = createSlice({
  name: "movieCredits",
  initialState: movieCreditsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCredits.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const accountInitialState: number = 0;

const accountSlice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccountId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const favMoviesInitialState: number[] = [];

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState: favMoviesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const addAndRemoveToFavoriteMovieInitialState: number = 0;

const addFavoriteMovieSlice = createSlice({
  name: "favoriteMovie",
  initialState: addAndRemoveToFavoriteMovieInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddToFavoriteMovie.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const removeFavoriteMovieSlice = createSlice({
  name: "removeFavoriteMovie",
  initialState: addAndRemoveToFavoriteMovieInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRemoveToFavoriteMovie.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

const searchMoviesByGenreAndYearInitialState: MovieDetails[] = [];

const searchMoviesByGenreAndYearSlice = createSlice({
  name: "searchMoviesByGenreAndYear",
  initialState: searchMoviesByGenreAndYearInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMoviesByGenreAndYear.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const searchMoviesReducer = searchMoviesSlice.reducer;
export const genresReducer = genreSlice.reducer;
export const popularFilmsReducer = popularFilmsSlice.reducer;
export const topRatedFilmsReducer = topRatedFilmsSlice.reducer;
export const movieDetailsReducer = movieDetailsSlice.reducer;
export const movieCreditsReducer = movieCreditsSlice.reducer;
export const accountReducer = accountSlice.reducer;
export const favoriteMoviesReducer = favoriteMoviesSlice.reducer;
export const addFavoriteMovieReducer = addFavoriteMovieSlice.reducer;
export const removeFavoriteMovieReducer = removeFavoriteMovieSlice.reducer;
export const searchMoviesByGenreAndYearReducer = searchMoviesByGenreAndYearSlice.reducer;
