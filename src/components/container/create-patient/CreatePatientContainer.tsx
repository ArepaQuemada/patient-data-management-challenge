import { usePatientsStore } from "../../../hooks/store/patients/usePatientsStore";
import { PatientForm } from "../../common/patient-form/PatientForm";
import { Patient } from "../../../models/patient";

const CreatePatientContainer = () => {
  const { add } = usePatientsStore();

  const handleSubmit = (formData: Patient) => {
    add(formData);
  };
  return <PatientForm onSubmit={handleSubmit} />;
};

export default CreatePatientContainer;
