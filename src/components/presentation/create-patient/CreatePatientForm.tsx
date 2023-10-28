import Modal from "@src/components/common/modal/Modal";
import { PatientForm } from "@src/components/common/patient-form/PatientForm";
import { ComponentProps } from "react";

interface CreatePatientFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: ComponentProps<typeof PatientForm>["onSubmit"];
}

const CreatePatientForm = ({
  isOpen,
  onClose,
  onSubmit,
}: CreatePatientFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PatientForm onSubmit={onSubmit} />
    </Modal>
  );
};
export default CreatePatientForm;
