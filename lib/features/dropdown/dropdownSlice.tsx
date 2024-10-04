import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateState = {
  isOpen: boolean;
};

const initialState: initialStateState = {
  isOpen: false,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,

  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = dropdownSlice.actions;

const dropdownReducer = dropdownSlice.reducer;

export default dropdownReducer;
