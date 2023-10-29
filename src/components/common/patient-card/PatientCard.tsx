import { Patient } from "@src/models/patient";
import Button from "../button/Button";
import { useState } from "react";
import arrowDown from "@src/assets/arrow-down-svgrepo-com.svg";
import "./index.css";

interface Props {
  patient: Patient;
  onClickEdit: (patient: Patient) => void;
}

const PatientCard: React.FC<Props> = ({ patient, onClickEdit }) => {
  const [details, setDetails] = useState(false);
  return (
    <div className="bg-slate-100 rounded-lg p-1 xs:p-4 min-w-full min-h-[120px] h-auto card-container__shadow ">
      <div className="flex items-center gap-4 xs:p-1 justify-center xs:justify-start">
        <img
          className="w-14 h-14 object-cover card-container--image__border p-1"
          src={patient.avatar}
          alt={patient.name}
          loading="lazy"
        />
        <h5 className="text-lg font-bold mb-4 text-center">{patient.name}</h5>
        <div className="ml-auto">
          <Button
            variant="accent"
            icon={
              <img
                className={`transition-transform ease-in ${
                  details ? "rotate-180" : "rotate-0"
                }`}
                src={arrowDown}
              />
            }
            onClick={() => setDetails(!details)}
          >
            Detalles
          </Button>
        </div>
      </div>
      <div
        className={`mt-8 transition-all ${
          details
            ? "max-h-40 visible opacity-100 overflow-auto"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <p className="text-gray-700 text-base">{patient.description}</p>
      </div>
      <div className="flex  items-center justify-around mt-4 md:justify-end md:gap-4">
        <a
          href={patient.website}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300"
        >
          Website
        </a>
        <Button color="secondary" onClick={() => onClickEdit(patient)}>
          Editar
        </Button>
      </div>
    </div>
  );
};

export default PatientCard;
