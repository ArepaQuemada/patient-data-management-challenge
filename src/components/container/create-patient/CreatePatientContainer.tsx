import { PatientForm } from "@src/components/common/patient-form/PatientForm";
import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";

const CreatePatientContainer = () => {
  const { add } = usePatientsStore();

  const handleSubmit = (formData: Patient) => {
    add(formData);
  };
  return <PatientForm onSubmit={handleSubmit} />;
};

export default CreatePatientContainer;
