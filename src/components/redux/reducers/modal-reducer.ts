import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { getUserToken, postUserToken, visibleUserProfile } from "../actions/modal-action";

export interface ModalState {
  getUserTokenValue: boolean;
  postUserTokenValue: boolean;
  visibleUserProfile: boolean;
}

const initialModalState: ModalState = {
  getUserTokenValue: false,
  postUserTokenValue: false,
  visibleUserProfile: false,
};

const modalReducer = createReducer(initialModalState, (builder) => {
  builder
    .addCase(getUserToken, (state, action: PayloadAction<boolean>) => {
      state.getUserTokenValue = action.payload;
    })
    .addCase(postUserToken, (state, action: PayloadAction<boolean>) => {
      state.postUserTokenValue = action.payload;
    })
    .addCase(visibleUserProfile, (state, action: PayloadAction<boolean>) => {
      state.visibleUserProfile = action.payload;
    });
});

export default modalReducer;
