import { MovieDetails, IDetailedCreditsItem } from "../api/films-api.types";

export interface RootState {
  searchMovies: MovieDetails[];
  userToken: {
    token: string;
  };
  modal: {
    getUserTokenValue: boolean;
    postUserTokenValue: boolean;
    visibleUserProfile: boolean;
  };
  filter: {
    sortByNameValue: string;
    sortByTypeValue: string;
    pageValue: string;
    startDateValue: string;
    endDateValue: string;
    activeGenresValue: number[];
  };
  genres: {
    id: number;
    name: string;
  };
  popularFilms: MovieDetails[];
  topRatedFilms: MovieDetails[];
  movieDetails: MovieDetails;
  movieCredits: IDetailedCreditsItem;
  account: number;
  favoriteMovies: number[];
  searchMoviesByGenreAndYear: MovieDetails[];
}
