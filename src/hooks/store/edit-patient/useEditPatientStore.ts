import { useAppDispatch, useAppSelector } from "../useStore";
import { setPatientToEdit as setPatientToEditStore } from "@src/infra/store/patients/patientsSlice";
import { useCallback } from "react";
import { Patient } from "@src/models/patient";

export const useEditPatientStore = () => {
  const patientToEdit = useAppSelector((state) => state.patients.patientToEdit);
  const dispatch = useAppDispatch();

  const setPatientToEdit = useCallback(
    (patient: Patient) => {
      dispatch(setPatientToEditStore(patient));
    },
    [dispatch]
  );

  return {
    setPatientToEdit,
    patientToEdit,
  };
};
