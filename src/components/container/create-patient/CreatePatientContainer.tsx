import CreatePatientForm from "@src/components/presentation/create-patient/CreatePatientForm";
import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";

const CreatePatientContainer = () => {
  const { add } = usePatientsStore();

  const handleSubmit = (formData: Patient) => {
    add(formData);
  };
  return (
    <CreatePatientForm isOpen onClose={() => {}} onSubmit={handleSubmit} />
  );
};

export default CreatePatientContainer;
