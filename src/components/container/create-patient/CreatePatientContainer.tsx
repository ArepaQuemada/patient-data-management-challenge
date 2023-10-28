import CreatePatientForm from "@src/components/presentation/create-patient/CreatePatientForm";
import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";

const CreatePatientContainer = () => {
  const { add } = usePatientsStore();
  const { modals, setStateCreateModal } = useModalsStore();

  const handleSubmit = (formData: Patient) => {
    add(formData);
    setStateCreateModal(false);
  };
  return (
    <CreatePatientForm
      isOpen={modals.isCreateModalOpen}
      onClose={() => setStateCreateModal(false)}
      createPatientFormProps={{
        onSubmit: handleSubmit,
      }}
    />
  );
};

export default CreatePatientContainer;
