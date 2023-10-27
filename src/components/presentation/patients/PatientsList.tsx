import { PatientDTO } from "../../../dto/patient";

type PatientsListProps = {
  patients: PatientDTO | null;
};

const PatientsList = ({ patients }: PatientsListProps) => {
  return (
    <>
      {patients?.map((patient) => (
        <div key={patient.id}>
          <p>{patient.name}</p>
        </div>
      ))}
    </>
  );
};

export default PatientsList;
