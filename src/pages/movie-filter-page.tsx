import { Header } from "../components/header/header-component";
import { Filters } from "../components/filters/Filter";
import { FilmList } from "../components/film-list";
import { Box } from "@mui/material";

function FilmsApp() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "900px" }}>
      <Header title="Фильмы" />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", height: "100%" }}>
        <Filters />
        <FilmList />
      </Box>
    </Box>
  );
}

export { FilmsApp };
