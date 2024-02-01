import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { sortByName, setSortByType, setPage, setStartDate, setEndDate, setActiveGenres } from "../actions/filter-action";

export interface FilterState {
  sortByNameValue: string;
  sortByTypeValue: string;
  pageValue: string;
  startDateValue: string;
  endDateValue: string;
  activeGenres: number[];
}

const initialFilterState: FilterState = {
  sortByNameValue: "",
  sortByTypeValue: "1",
  pageValue: "1",
  startDateValue: "",
  endDateValue: "",
  activeGenres: [],
};

const filterReducer = createReducer(initialFilterState, (builder) => {
  builder
    .addCase(sortByName, (state, action: PayloadAction<string>) => {
      state.sortByNameValue = action.payload;
    })
    .addCase(setSortByType, (state, action: PayloadAction<string>) => {
      state.sortByTypeValue = action.payload;
    })
    .addCase(setPage, (state, action: PayloadAction<string>) => {
      state.pageValue = action.payload;
    })
    .addCase(setStartDate, (state, action: PayloadAction<string>) => {
      state.startDateValue = action.payload;
    })
    .addCase(setEndDate, (state, action: PayloadAction<string>) => {
      state.endDateValue = action.payload;
    })
    .addCase(setActiveGenres, (state, action: PayloadAction<number[]>) => {
      state.activeGenres = action.payload;
    });
});

export default filterReducer;
