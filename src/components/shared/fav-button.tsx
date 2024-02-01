import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/types";
import { AppDispatch } from "../redux/store";
import { MovieDetails } from "../api/films-api.types";
import { Checkbox } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { fetchFavoriteMovies, fetchAddToFavoriteMovie, fetchRemoveToFavoriteMovie } from "../redux/api/movie-action";

function FavButton({ id }: { id: MovieDetails["id"] }) {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteMovies = useSelector((state: RootState) => state.favoriteMovies);
  const isFavorite = favoriteMovies.includes(id);

  const handleFavoriteToggle = async () => {
    if (!isFavorite) {
      await dispatch(fetchAddToFavoriteMovie(id));
    } else {
      await dispatch(fetchRemoveToFavoriteMovie(id));
    }
    dispatch(fetchFavoriteMovies());
  };

  return (
    <Checkbox
      sx={{ color: "orange" }}
      icon={<StarBorderIcon />}
      checkedIcon={<StarIcon sx={{ color: "orange" }} />}
      checked={isFavorite}
      onChange={handleFavoriteToggle}
    />
  );
}

export { FavButton };
