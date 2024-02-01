import { useEffect, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, fetchMovieCredits } from "../redux/api/movie-action";
import { FavButton } from "../shared/fav-button";
import { Box, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { boxStyle, cardMedia, titleStyles, detailBoxStyles, detailTitleStyles } from "./dc.styles";

const MovieDetailsCard = memo(function MovieDetailsCard() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();
  const movieDetails = useSelector((state: RootState) => state.movieDetails);
  const movieCredits = useSelector((state: RootState) => state.movieCredits);
  const movieId = +id!;

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    dispatch(fetchMovieCredits(movieId));
  });
  return (
    <Box sx={boxStyle}>
      <CardMedia component={"img"} image={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} sx={cardMedia} />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "48px", lineHeight: "56px" }}>{movieDetails.title}</Typography>
            <FavButton id={movieId} />
          </Box>

          <IconButton
            onClick={() => {
              navigate("/home");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography sx={titleStyles}>Описание</Typography>
          <Typography sx={{ fontSize: "16px" }}>{movieDetails.overview}</Typography>
        </Box>
        <Box>
          <Box>
            <Typography sx={titleStyles}>Актеры:</Typography>
          </Box>
          {movieCredits.slice(0, 4).map((actor) => (
            <Typography sx={{ fontSize: "16px" }} key={actor.id}>
              {actor.name}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography sx={titleStyles}>Детали:</Typography>
          <Box sx={detailBoxStyles}>
            <Typography sx={detailTitleStyles}>Страна</Typography>
            <Typography>{movieDetails.production_countries?.[0]?.name}</Typography>
          </Box>
          <Box sx={detailBoxStyles}>
            <Typography sx={detailTitleStyles}>Дата выхода</Typography>
            <Typography>{movieDetails.release_date}</Typography>
          </Box>
          <Box sx={detailBoxStyles}>
            <Typography sx={detailTitleStyles}>Жанр</Typography>
            <Typography>{movieDetails.genres?.[0]?.name}</Typography>
          </Box>
          <Box sx={detailBoxStyles}>
            <Typography sx={detailTitleStyles}>Время</Typography>
            <Typography>{movieDetails.runtime} мин</Typography>
          </Box>
          <Box sx={detailBoxStyles}>
            <Typography sx={detailTitleStyles}>Доход</Typography>
            <Typography>{movieDetails.revenue}$</Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
});

export { MovieDetailsCard };
