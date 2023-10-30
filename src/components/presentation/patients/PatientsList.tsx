import React from "react";
import "./index.css";
import PatientCard from "@src/components/common/patient-card/PatientCard";
import { Patient } from "@src/models/patient";

type PatientsListProps = {
  patients: Patient[] | null;
  onClickEdit: (patient: Patient) => void;
};

// FIXME: Se podria abstraer el efecto de animacion en un HOC

const PatientsList = ({ patients, onClickEdit }: PatientsListProps) => {
  return (
    <section className="mt-16 patient-list gap-4 place-items-center xl:max-w-[1280px] justify-center m-auto">
      {patients?.map((patient) => (
        <React.Fragment key={patient.id}>
          <div className="patient-list--card__animation">
            <PatientCard patient={patient} onClickEdit={onClickEdit} />
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default PatientsList;
