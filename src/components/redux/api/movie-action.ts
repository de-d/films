import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { useCookies } from "react-cookie";
import { Genre, MovieDetails, IDetailedCreditsItem } from "../../api/films-api.types";

export async function fetchFromApi(endpoint: string, apiKey: string, params: string = "") {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };
  try {
    const url = `https://api.themoviedb.org/3${endpoint}${params}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

export const fetchSearchMovies = createAsyncThunk<MovieDetails[], string, { state: RootState }>(
  "searchMovies/fetchSearchMovies",
  async (query, { getState }) => {
    const apiKey = getState().userToken.token;
    const page = getState().filter.pageValue;
    const data = await fetchFromApi("/search/movie?query=" + query + "&include_adult=false&language=ru-RU&page=" + page, apiKey);
    return data.results;
  }
);

export const fetchGenres = createAsyncThunk<Genre[], undefined, { state: RootState }>("genres/fetchGenres", async (_, { getState }) => {
  const apiKey = getState().userToken.token;
  const data = await fetchFromApi("/genre/movie/list?language=ru", apiKey);
  return data.genres.slice(0, 4);
});

export const fetchPopularFilms = createAsyncThunk<MovieDetails[], undefined, { state: RootState }>(
  "popularFilms/fetchPopularFilms",
  async (_, { getState }) => {
    const apiKey = getState().userToken.token;
    const page = getState().filter.pageValue;
    const data = await fetchFromApi("/movie/popular?language=ru-RU&page=" + page, apiKey);
    return data.results;
  }
);

export const fetchTopRatedFilms = createAsyncThunk<MovieDetails[], undefined, { state: RootState }>(
  "topRatedFilms/fetchTopRatedFilms",
  async (_, { getState }) => {
    const apiKey = getState().userToken.token;
    const page = getState().filter.pageValue;
    const data = await fetchFromApi("/movie/top_rated?language=ru-RU&page=" + page, apiKey);
    return data.results;
  }
);

export const fetchMovieDetails = createAsyncThunk<MovieDetails[], number, { state: RootState }>(
  "movieDetails/fetchMovieDetails",
  async (movieId: number, { getState }) => {
    const apiKey = getState().userToken.token;
    const data = await fetchFromApi("/movie/" + movieId + "?language=ru-RU", apiKey);
    return data;
  }
);

export const fetchMovieCredits = createAsyncThunk<IDetailedCreditsItem[], number, { state: RootState }>(
  "movieCredits/fetchMovieCredits",
  async (movieId: number, { getState }) => {
    const apiKey = getState().userToken.token;
    const data = await fetchFromApi("/movie/" + movieId + "/credits?language=ru-RU", apiKey);
    return data.cast.slice(0, 4);
  }
);

export const fetchAccountId = createAsyncThunk<number, undefined, { state: RootState }>("account/fetchAccountId", async (_, { getState }) => {
  const [, setCookie] = useCookies(["accountId"]);
  const apiKey = getState().userToken.token;
  const data = await fetchFromApi("/account", apiKey);
  setCookie("accountId", data.id, { path: "/" });
  return data.id;
});

export const fetchFavoriteMovies = createAsyncThunk<number[], undefined, { state: RootState }>(
  "favoriteMovies/fetchFavoriteMovies",
  async (_, { getState }) => {
    const apiKey = getState().userToken.token;
    const accountId = getState().account;
    const data = await fetchFromApi("/account/" + accountId + "/favorite/movies?language=ru-RU", apiKey);
    const favMoviesIds = data.results.map((movie: { id: number }) => movie.id);
    return favMoviesIds;
  }
);

export const fetchAddToFavoriteMovie = createAsyncThunk<number, number, { state: RootState }>(
  "favorites/fetchAddAndRemoveFavoriteMovie",
  async (movieId: number, { getState }) => {
    const apiKey = getState().userToken.token;
    const accountId = getState().account;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite: true,
      }),
    };
    const response = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?language=ru-RU`, options);
    const data = await response.json();
    if (!response.ok) {
      alert("Не удалось добавить в избранное, попробуйте ещё раз");
    }
    return data;
  }
);

export const fetchRemoveToFavoriteMovie = createAsyncThunk<number, number, { state: RootState }>(
  "favorites/fetchAddAndRemoveFavoriteMovie",
  async (movieId: number, { getState }) => {
    const apiKey = getState().userToken.token;
    const accountId = getState().account;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite: false,
      }),
    };
    const response = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?language=ru-RU`, options);
    const data = await response.json();
    if (!response.ok) {
      alert("Не удалось удалить из избранного, попробуйте ещё раз");
    }
    return data;
  }
);

export const fetchSearchMoviesByGenreAndYear = createAsyncThunk<MovieDetails[], undefined, { state: RootState }>(
  "searchMoviesByGenreAndYear/fetchSearchMoviesByGenreAndYear",
  async (_, { getState }) => {
    const state = getState();
    const apiKey = state.userToken.token;
    const page = state.filter.pageValue;
    const startDate = state.filter.startDateValue;
    const endDate = state.filter.endDateValue;
    const sortByTypeValue = state.filter.sortByTypeValue;

    let sortByPopularity = "popularity.desc";
    if (sortByTypeValue == "1") {
      sortByPopularity = "popularity.desc";
    } else if (sortByTypeValue == "2") {
      sortByPopularity = "vote_count.desc";
    }

    const data = await fetchFromApi(
      `/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=${page}&primary_release_date.gte=${startDate}-01-01&primary_release_date.lte=${endDate}-01-01&sort_by=${sortByPopularity}`,
      apiKey
    );
    return data.results;
  }
);
