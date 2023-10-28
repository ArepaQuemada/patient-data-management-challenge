import React from "react";
import "./index.css";
import { PatientDTO } from "@src/dto/patient";
import PatientCard from "@src/components/common/patient-card/PatientCard";

type PatientsListProps = {
  patients: PatientDTO | null;
};

const PatientsList = ({ patients }: PatientsListProps) => {
  return (
    <section className="mt-16 patient-list gap-16 place-items-center">
      {patients?.map((patient) => (
        <React.Fragment key={patient.id}>
          <PatientCard
            avatar={patient.avatar}
            description={patient.description}
            name={patient.name}
            website={patient.website}
          />
        </React.Fragment>
      ))}
    </section>
  );
};

export default PatientsList;
