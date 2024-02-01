import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../redux/api/movie-action";
import { setActiveGenres } from "../../redux/actions/filter-action";
import { Genre } from "../../api/films-api.types";
import { AppDispatch } from "../../redux/store";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface IGenres {
  genres: Genre[];
}

function SortingGenres() {
  const dispatch = useDispatch<AppDispatch>();
  const genres = useSelector((state: IGenres) => state.genres);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: Genre[]) => {
    setSelectedGenres(newValue.map((genre) => genre.id));
    dispatch(setActiveGenres(newValue.map((genre) => genre.id)));
  };
  return (
    <Autocomplete
      multiple
      limitTags={1}
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      value={genres.filter((genre) => selectedGenres.includes(genre.id))}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
          {option.name}
        </li>
      )}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Жанры" variant="standard" />}
    />
  );
}
export { SortingGenres };
