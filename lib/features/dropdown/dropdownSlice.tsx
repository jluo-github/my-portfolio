import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,

  reducers: {
    closeIt: (state) => {
      state.isOpen = false;
    },
    openIt: (state) => {
      state.isOpen = true;
    },
  },
});

export const { closeIt, openIt } = dropdownSlice.actions;

const dropdownReducer = dropdownSlice.reducer;

export default dropdownReducer;
