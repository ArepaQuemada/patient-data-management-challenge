import Modal from "@src/components/common/modal/Modal";
import { PatientForm } from "@src/components/common/patient-form/PatientForm";
import { ComponentProps } from "react";

interface CreatePatientFormProps {
  isOpen: boolean;
  onClose: () => void;
  createPatientFormProps: ComponentProps<typeof PatientForm>;
}

const CreatePatientForm = ({
  isOpen,
  onClose,
  createPatientFormProps,
}: CreatePatientFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PatientForm
        onSubmit={createPatientFormProps.onSubmit}
        defaultFields={createPatientFormProps.defaultFields}
      />
    </Modal>
  );
};
export default CreatePatientForm;
