import PatientsList from "@src/components/presentation/patients/PatientsList";
import { useGetPatients } from "@src/hooks/services/useGetPatients";
import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";
import { useEffect } from "react";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";
import { useEditPatientStore } from "@src/hooks/store/edit-patient/useEditPatientStore";
import CreatePatientContainer from "../create-patient/CreatePatientContainer";
import EditPatientContainer from "../edit-patient/EditPatientContainer";

const PatientsContainer = () => {
  const { data, getPatients, loading } = useGetPatients();
  const { patients, setPatients } = usePatientsStore();
  const { modals, setStateEditModal } = useModalsStore();
  const { setPatientToEdit } = useEditPatientStore();

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

  const onClickEdit = (patient: Patient) => {
    setPatientToEdit(patient);
    setStateEditModal(true);
  };

  console.log(loading);

  if (loading)
    return (
      <div className="bg-red-800">
        <div>Loading</div>
      </div>
    );
  return (
    <>
      <PatientsList patients={patients} onClickEdit={onClickEdit} />
      {modals.isCreateModalOpen && <CreatePatientContainer />}
      {modals.isEditModalOpen && <EditPatientContainer />}
    </>
  );
};

export default PatientsContainer;
