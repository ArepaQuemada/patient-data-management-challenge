import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "./patients/patientsSlice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;