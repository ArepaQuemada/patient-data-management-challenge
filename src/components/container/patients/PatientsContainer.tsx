import PatientsList from "@src/components/presentation/patients/PatientsList";
import { useGetPatients } from "@src/hooks/services/useGetPatients";
import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { useEffect } from "react";
import CreatePatientContainer from "../create-patient/CreatePatientContainer";

const PatientsContainer = () => {
  const { data, getPatients, loading } = useGetPatients();
  const { patients, setPatients } = usePatientsStore();

  useEffect(() => {
    if (data) {
      setPatients(data);
    }
  }, [data, setPatients]);

  useEffect(() => {
    const controller = new AbortController();
    getPatients(controller.signal);
    return () => {
      controller.abort();
    };
  }, [getPatients]);

  if (loading)
    return (
      <div>
        <div>Loading</div>
      </div>
    );
  return (
    <>
      <CreatePatientContainer />
      <PatientsList patients={patients} />;
    </>
  );
};

export default PatientsContainer;
