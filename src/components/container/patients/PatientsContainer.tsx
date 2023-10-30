import PatientsList from "@src/components/presentation/patients/PatientsList";
import { useGetPatients } from "@src/hooks/services/useGetPatients";
import { usePatientsStore } from "@src/hooks/store/patients/usePatientsStore";
import { Patient } from "@src/models/patient";
import { useEffect } from "react";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";
import { useEditPatientStore } from "@src/hooks/store/edit-patient/useEditPatientStore";
import CreatePatientContainer from "../create-patient/CreatePatientContainer";
import EditPatientContainer from "../edit-patient/EditPatientContainer";
import loadingDots from "@src/assets/dots-loading.gif";

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

  if (loading)
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto h-24 w-24 md:h-36 md:w-36 text-center">
        <img
          className="object-contain w-full h-full"
          src={loadingDots}
          alt="loading-state"
          loading="eager"
        />
        <p>Cargando...</p>
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
