import { useParams } from "react-router-dom";
import { Header } from "../components/header/header-component";
import { MovieDetailsCard } from "../components/movie-details/details-card";
import { Box } from "@mui/material";

function MoviesDetailsPage() {
  const { title } = useParams();
  return (
    <Box>
      <Header title={`Фильмы - ${title}`} />
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <MovieDetailsCard />
      </Box>
    </Box>
  );
}

export { MoviesDetailsPage };
