import React from "react";
import "./index.css";
import { PatientDTO } from "@src/dto/patient";
import PatientCard from "@src/components/common/patient-card/PatientCard";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";

type PatientsListProps = {
  patients: PatientDTO | null;
};

const PatientsList = ({ patients }: PatientsListProps) => {
  const { setStateEditModal } = useModalsStore();
  return (
    <section className="mt-16 patient-list gap-16 place-items-center">
      {patients?.map((patient) => (
        <React.Fragment key={patient.id}>
          <PatientCard
            patient={patient}
            onClickEdit={() => {
              setStateEditModal(true);
            }}
          />
        </React.Fragment>
      ))}
    </section>
  );
};

export default PatientsList;
