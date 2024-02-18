import { createSlice } from "@reduxjs/toolkit";

const Favorits = createSlice({
  name: "favorits",
  initialState: { movie: [] },
  reducers: {
    addToFavorit: (state, action) => {
      state.movie.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      const index = state.movie.findIndex(
        (movie) => movie.id == action.payload
      );
      if (index != -1) {
        state.movie.splice(index, 1);
      }
    },
  },
});
  export const {addToFavorit,removeFromFavorite}=Favorits.actions
export default Favorits.reducer;
