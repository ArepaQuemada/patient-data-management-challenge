import { useAppDispatch, useAppSelector } from "../useStore";
import {
  add,
  edit,
  setPatients,
} from "../../../infra/store/patients/patientsSlice";

export const usePatientsStore = () => {
  const patients = useAppSelector((state) => state.patients.patients);
  const dispatch = useAppDispatch();
  return {
    patients,
    setPatients: (patients: Parameters<typeof setPatients>[0]) =>
      dispatch(setPatients(patients)),
    add: (patient: Parameters<typeof add>[0]) => dispatch(add(patient)),
    edit: (patient: Parameters<typeof edit>[0]) => dispatch(edit(patient)),
  };
};
