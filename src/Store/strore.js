import { configureStore } from "@reduxjs/toolkit";
import favoritReducer from "./slices/favorits";

const Store = configureStore({
  reducer: {
    Favorites: favoritReducer,
  },
});
export default Store;
