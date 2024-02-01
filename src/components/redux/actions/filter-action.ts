import { createAction } from "@reduxjs/toolkit";

export const sortByName = createAction<string>("SORT_BY_NAME");

export const setSortByType = createAction<string>("SET_SORT_BY_TYPE");

export const setPage = createAction<string>("SET_PAGE");

export const setStartDate = createAction<string>("SET_START_DATE");

export const setEndDate = createAction<string>("SET_END_DATE");

export const setActiveGenres = createAction<number[]>("ACTIVE_GENRES");
