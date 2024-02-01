import { useDispatch, useSelector } from "react-redux";
import { setSortByType } from "../../redux/actions/filter-action";
import { RootState } from "../../redux/types";
import { Select, MenuItem, FormControl, InputLabel, Box, SelectChangeEvent } from "@mui/material";

function SelectSorting() {
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter.sortByTypeValue);
  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(setSortByType(event.target.value));
  };

  return (
    <Box sx={{ width: "300px", textAlign: "left" }}>
      <FormControl fullWidth>
        <InputLabel>Сортировать по:</InputLabel>
        <Select value={filterState} label="Сортировать по:" onChange={handleChange}>
          <MenuItem value="1">Популярности</MenuItem>
          <MenuItem value="2">Рейтингу</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export { SelectSorting };
