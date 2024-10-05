import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type initialStateState = {
  isOpen: boolean;
  isActive: string;
};

const initialState: initialStateState = {
  isOpen: false,
  isActive: "",
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,

  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },

    setActive: (state, action: PayloadAction<string>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsOpen, setActive } = dropdownSlice.actions;

const dropdownReducer = dropdownSlice.reducer;

export default dropdownReducer;
