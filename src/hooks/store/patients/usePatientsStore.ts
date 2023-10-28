import { useAppDispatch, useAppSelector } from "../useStore";
import {
  add as addStore,
  edit as editStore,
  setPatients as setPatientsStore,
} from "../../../infra/store/patients/patientsSlice";
import { useCallback } from "react";
import { Patient } from "../../../models/patient";

export const usePatientsStore = () => {
  const patients = useAppSelector((state) => state.patients.patients);
  const dispatch = useAppDispatch();

  const setPatients = useCallback(
    (newPatients: Patient[]) => {
      dispatch(setPatientsStore(newPatients));
    },
    [dispatch]
  );

  const add = useCallback(
    (patient: Patient) => {
      dispatch(addStore(patient));
    },
    [dispatch]
  );

  const edit = useCallback(
    (patient: Patient) => {
      dispatch(editStore(patient));
    },
    [dispatch]
  );

  return {
    patients,
    setPatients,
    add,
    edit,
  };
};
