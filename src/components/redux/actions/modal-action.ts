import { createAction } from "@reduxjs/toolkit";

export const getUserToken = createAction<boolean>("GET_TOKEN");

export const postUserToken = createAction<boolean>("POST_TOKEN");

export const visibleUserProfile = createAction<boolean>("USER_PROFILE");
