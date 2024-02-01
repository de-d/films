import { Card, CardActions, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { MovieDetails } from "../api/films-api.types";
import { Link } from "react-router-dom";
import { FavButton } from "../shared/fav-button";
import { cardStyles, mediaStyles, contentCardStyles, movieNameStyles, ratingStyles } from "./index.styles";

type FilmCardProps = {
  film: MovieDetails;
};
function FilmCard({ film }: FilmCardProps) {
  const movieId = film.id;
  if (!film) {
    return null;
  }
  return (
    <Card sx={cardStyles}>
      <Link to={`/films/${film.id}/${film.title}`}>
        <CardActionArea>
          <CardMedia component={"img"} image={`https://image.tmdb.org/t/p/w500${film.poster_path}`} sx={mediaStyles} />
        </CardActionArea>
      </Link>
      <CardContent sx={contentCardStyles}>
        <CardContent sx={{ width: "200px" }}>
          <Typography color="text.secondary" sx={movieNameStyles}>
            {film.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={ratingStyles}>
            Рейтинг: {film.vote_average}
          </Typography>
        </CardContent>
        <CardActions>
          <FavButton id={movieId} />
        </CardActions>
      </CardContent>
    </Card>
  );
}
export { FilmCard };
