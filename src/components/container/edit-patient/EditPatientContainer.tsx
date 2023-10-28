import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";
import EditPatientForm from "@src/components/presentation/edit-patient/EditPatientForm";

const EditPatientContainer = () => {
  const { add } = usePatientsStore();
  const { modals, setStateEditModal } = useModalsStore();

  const handleSubmit = (formData: Patient) => {
    add(formData);
    setStateEditModal(false);
  };

  return (
    <EditPatientForm
      isOpen={modals.isEditModalOpen}
      onClose={() => setStateEditModal(false)}
      createPatientFormProps={{ onSubmit: handleSubmit }}
    />
  );
};

export default EditPatientContainer;
