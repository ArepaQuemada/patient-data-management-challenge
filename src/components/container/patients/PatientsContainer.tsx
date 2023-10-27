import { useEffect } from "react";
import { useGetPatients } from "../../../hooks/services/useGetPatients";
import PatientsList from "../../presentation/patients/PatientsList";

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
  return <PatientsList patients={data} />;
};

export default PatientsContainer;
