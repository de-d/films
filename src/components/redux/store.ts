import { configureStore, Action, ThunkDispatch } from "@reduxjs/toolkit";
import userTokenReducer from "./reducers/user-reducer";
import modalReducer from "./reducers/modal-reducer";
import filterReducer from "./reducers/filter-reducer";
import {
  searchMoviesReducer,
  genresReducer,
  popularFilmsReducer,
  topRatedFilmsReducer,
  movieDetailsReducer,
  movieCreditsReducer,
  accountReducer,
  favoriteMoviesReducer,
  searchMoviesByGenreAndYearReducer,
} from "./api/movie-slice";
import { RootState } from "./types";

export const store = configureStore({
  reducer: {
    searchMovies: searchMoviesReducer,
    userToken: userTokenReducer,
    modal: modalReducer,
    filter: filterReducer,
    genres: genresReducer,
    popularFilms: popularFilmsReducer,
    topRatedFilms: topRatedFilmsReducer,
    movieDetails: movieDetailsReducer,
    movieCredits: movieCreditsReducer,
    account: accountReducer,
    favoriteMovies: favoriteMoviesReducer,
    searchMoviesByGenreAndYear: searchMoviesByGenreAndYearReducer,
  },
});
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;
