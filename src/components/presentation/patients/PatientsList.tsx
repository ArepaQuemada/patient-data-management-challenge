import React from "react";
import { PatientDTO } from "../../../dto/patient";
import PatientCard from "../../common/patient-card/PatientCard";
import "./index.css";

type PatientsListProps = {
  patients: PatientDTO | null;
};

const PatientsList = ({ patients }: PatientsListProps) => {
  return (
    <section className="mt-16 patient-list gap-16">
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
