import { configureStore } from '@reduxjs/toolkit';
import { save, load } from "redux-localstorage-simple"
import userReducer from "./userReducer";

export default configureStore({
  reducer: {user: userReducer},
  middleware: [save()],
  preloadedState: load(),
})