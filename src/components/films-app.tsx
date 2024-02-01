import { Box } from "@mui/material";
import { Header } from "./header/header-component";
import { Filters } from "./filters/Filter";
import { FilmList } from "./film-list";

function FilmsApp() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "1280px", height: "900px", margin: "0 auto" }}>
      <Header title="Фильмы" />
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Filters />
        <FilmList />
      </Box>
    </Box>
  );
}

export { FilmsApp };
