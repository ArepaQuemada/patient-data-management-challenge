import { useEffect } from "react";
import { useGetPatients } from "../../../hooks/services/useGetPatients";
import PatientsList from "../../presentation/patients/PatientsList";
import CreatePatientContainer from "../create-patient/CreatePatientContainer";

const PatientsContainer = () => {
  const { data, getPatients, loading } = useGetPatients();

  useEffect(() => {
    const controller = new AbortController();
    getPatients(controller.signal);
    return () => {
      controller.abort();
    };
  }, [getPatients]);

  if (loading) return <>Loading...</>;
  return (
    <>
      <CreatePatientContainer />
      <PatientsList patients={data} />;
    </>
  );
};

export default PatientsContainer;
