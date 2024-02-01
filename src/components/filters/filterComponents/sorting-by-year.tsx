import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setStartDate, setEndDate } from "../../redux/actions/filter-action";
import { fetchSearchMoviesByGenreAndYear } from "../../redux/api/movie-action";
import { Box, Typography, Slider } from "@mui/material";

function valuetext(value: number) {
  return `${value}`;
}

const years = [
  {
    value: 1950,
  },
  {
    value: 1965,
  },
  {
    value: 1980,
  },
  {
    value: 1995,
  },
  {
    value: 2010,
  },
  {
    value: 2023,
  },
];
function SortingByYear() {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState<number[]>([1987, 2001]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const valueArray = Array.isArray(newValue) ? newValue : [newValue];
    setValue(valueArray);
    dispatch(setStartDate(valueArray[0].toString()));
    dispatch(setEndDate(valueArray[1].toString()));
    dispatch(fetchSearchMoviesByGenreAndYear());
  };

  return (
    <Box sx={{ width: 300, marginTop: "32px" }}>
      <Typography sx={{ mb: 2, textAlign: "left" }}>Год релиза:</Typography>
      <Slider
        marks={years}
        min={1950}
        max={2023}
        step={1}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}

export { SortingByYear };
