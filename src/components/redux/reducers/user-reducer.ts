import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setUserToken } from "../actions/user-action";

interface UserState {
  token: string;
}

const initialUserState: UserState = {
  token: "",
};

const userTokenReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(setUserToken, (state, action: PayloadAction<string>) => {
    state.token = action.payload;
  });
});

export default userTokenReducer;
