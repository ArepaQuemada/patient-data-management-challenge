import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Patient } from "../../../models/patient";

export interface PatientsState {
  patients: Patient[];
}

const initialState: PatientsState = {
  patients: [],
};

export const patientsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
    },
    add: (state, action: PayloadAction<Patient>) => {
      state.patients.unshift(action.payload);
    },
    edit: (state, action: PayloadAction<Patient>) => {
      const index = state.patients.findIndex(
        (patient) => patient.id === action.payload.id
      );
      state.patients[index] = action.payload;
    },
  },
});
export const { add, edit, setPatients } = patientsSlice.actions;

export default patientsSlice.reducer;
