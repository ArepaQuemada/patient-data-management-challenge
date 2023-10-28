import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";
import EditPatientForm from "@src/components/presentation/edit-patient/EditPatientForm";
import { useEditPatientStore } from "@src/hooks/store/edit-patient/useEditPatientStore";

const EditPatientContainer = () => {
  const { edit } = usePatientsStore();
  const { patientToEdit } = useEditPatientStore();
  const { modals, setStateEditModal } = useModalsStore();

  const handleSubmit = (formData: Patient) => {
    edit(formData);
    setStateEditModal(false);
  };

  return (
    <EditPatientForm
      isOpen={modals.isEditModalOpen}
      onClose={() => setStateEditModal(false)}
      createPatientFormProps={{
        onSubmit: handleSubmit,
        defaultFields: patientToEdit,
      }}
    />
  );
};

export default EditPatientContainer;
