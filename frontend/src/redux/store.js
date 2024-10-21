import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import friendsSlice from "./friendsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    friends: friendsSlice,
  },
});
