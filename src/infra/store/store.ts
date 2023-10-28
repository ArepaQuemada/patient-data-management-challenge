import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "./patients/patientsSlice";
import modalsReducer from "./modals/modalsSlice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    modals: modalsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
