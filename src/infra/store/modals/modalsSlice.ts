import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
  isCreateModalOpen: boolean;
  isEditModalOpen: boolean;
}

const initialState: ModalsState = {
  isCreateModalOpen: false,
  isEditModalOpen: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setStateCreateModal: (state, action: PayloadAction<boolean>) => {
      state.isCreateModalOpen = action.payload;
    },
    setStateEditModal: (state, action: PayloadAction<boolean>) => {
      state.isEditModalOpen = action.payload;
    },
  },
});
export const { setStateCreateModal, setStateEditModal } = modalsSlice.actions;

export default modalsSlice.reducer;
