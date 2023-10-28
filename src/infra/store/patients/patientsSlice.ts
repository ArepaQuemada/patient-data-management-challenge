import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Patient } from "../../../models/patient";

export interface PatientsState {
  patients: Patient[];
  // TODO: Buscar otra manera de persistir el paciente a editar, no me parece una buena solucion en principio
  patientToEdit: Patient | null;
}

const initialState: PatientsState = {
  patients: [],
  patientToEdit: null,
};

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
    },
    setPatientToEdit: (state, action: PayloadAction<Patient>) => {
      state.patientToEdit = action.payload;
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
export const { add, edit, setPatients, setPatientToEdit } =
  patientsSlice.actions;

export default patientsSlice.reducer;
