import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { FilmCard } from "../film-card/index";
import { MovieDetails } from "../api/films-api.types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/types";
import {
  fetchSearchMovies,
  fetchPopularFilms,
  fetchTopRatedFilms,
  fetchFavoriteMovies,
  fetchSearchMoviesByGenreAndYear,
} from "../redux/api/movie-action";
import { AppDispatch } from "../redux/store";

function FilmList() {
  const dispatch = useDispatch<AppDispatch>();
  const sort = useSelector((state: RootState) => state.filter.sortByTypeValue);
  const page = useSelector((state: RootState) => state.filter.pageValue);
  const year = useSelector((state: RootState) => state.filter.startDateValue);
  const movieName = useSelector((state: RootState) => state.filter.sortByNameValue);
  const topPopularFilms = useSelector((state: RootState) => state.popularFilms);
  const topRatedFilms = useSelector((state: RootState) => state.topRatedFilms);
  const searchFilms = useSelector((state: RootState) => state.searchMovies);
  const searchMovies = useSelector((state: RootState) => state.searchMoviesByGenreAndYear);

  useEffect(() => {
    dispatch(fetchSearchMovies(movieName));
    dispatch(fetchPopularFilms());
    dispatch(fetchTopRatedFilms());
    dispatch(fetchFavoriteMovies());
    dispatch(fetchSearchMoviesByGenreAndYear());
  }, [dispatch, page, movieName]);

  let film: MovieDetails[] = [];

  if (movieName !== "") {
    film = searchFilms;
  } else if (year !== "") {
    film = searchMovies;
  } else if (sort === "1") {
    film = topPopularFilms;
  } else if (sort === "2") {
    film = topRatedFilms;
  } else {
    film = [];
  }

  return (
    <Box sx={{ width: "1210px", height: "900px", paddingTop: "30px" }}>
      <Grid container rowGap={1} columnGap={1} sx={{ height: "850px", overflowY: "scroll" }}>
        <Grid container spacing={2}>
          {film.map((film) => (
            <Grid item xs={3} key={film.id}>
              <FilmCard film={film} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export { FilmList };
