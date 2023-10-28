import { useEffect } from "react";
import { useGetPatients } from "../../../hooks/services/useGetPatients";
import PatientsList from "../../presentation/patients/PatientsList";
import CreatePatientContainer from "../create-patient/CreatePatientContainer";
import { usePatientsStore } from "../../../hooks/store/patients/usePatientsStore";

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
