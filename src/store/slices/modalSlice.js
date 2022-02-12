import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    mode: "none",
  },
  reducers: {
    toggle: (state, { payload }) => {
      if (state.mode === payload) {
        state.mode = "none";
      } else state.mode = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;
