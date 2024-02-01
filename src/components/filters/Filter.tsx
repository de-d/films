import { memo } from "react";
import { useDispatch } from "react-redux";
import { sortByName, setSortByType, setPage, setStartDate, setEndDate } from "../redux/actions/filter-action";
import { Box, Typography, IconButton, Pagination } from "@mui/material";
import { SelectSorting } from "./filterComponents/sorting-by-popular-or-rating";
import { SortingGenres } from "./filterComponents/sorting-genres";
import { SortingByYear } from "./filterComponents/sorting-by-year";
import { SearchByName } from "./filterComponents/search-by-name";
import CloseIcon from "@mui/icons-material/Close";
import { FilterPaper, boxStyles, clearBtnStyles, paginationStyles } from "./filter.styles";

const SelectSortingMemo = memo(SelectSorting);
const SortingByYearMemo = memo(SortingByYear);
const SortingGenresMemo = memo(SortingGenres);

function Filters() {
  const dispatch = useDispatch();

  function resetFilters() {
    dispatch(sortByName(""));
    dispatch(setSortByType("1"));
    dispatch(setPage("1"));
    dispatch(setStartDate(""));
    dispatch(setEndDate(""));
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(String(value)));
  };

  return (
    <FilterPaper>
      <Box sx={boxStyles}>
        <Box sx={clearBtnStyles}>
          <Typography>Фильтры</Typography>
          <IconButton onClick={resetFilters}>
            <CloseIcon />
          </IconButton>
        </Box>
        <div>
          <SearchByName />
          <SelectSortingMemo />
          <SortingByYearMemo />
          <SortingGenresMemo />
        </div>
        <Pagination count={500} size="small" color="primary" sx={paginationStyles} onChange={handlePageChange} />
      </Box>
    </FilterPaper>
  );
}

export { Filters };
