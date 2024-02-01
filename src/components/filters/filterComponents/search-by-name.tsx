import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { sortByName } from "../../redux/actions/filter-action";
import { RootState } from "../../redux/types";

function SearchByName() {
  const dispatch = useDispatch();
  const movieName = useSelector((state: RootState) => state.filter.sortByNameValue);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(sortByName(e.target.value));
  }

  return (
    <Box sx={{ width: "200px", marginBottom: "32px", textAlign: "left" }}>
      <TextField sx={{ width: "300px" }} variant="standard" label="Поиск по названию" onChange={handleSearch} value={movieName} />
    </Box>
  );
}

export { SearchByName };
