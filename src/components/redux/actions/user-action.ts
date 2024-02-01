import { createAction } from "@reduxjs/toolkit";

export const setUserToken = createAction<string>("SET_USER_TOKEN");
