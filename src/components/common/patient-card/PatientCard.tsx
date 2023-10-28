import Button from "../button/Button";
import "./index.css";

interface Props {
  name: string;
  avatar: string;
  description: string;
  website: string;
}

const PatientCard: React.FC<Props> = ({
  name,
  avatar,
  description,
  website,
}) => {
  return (
    <div className="bg-slate-100 rounded-lg p-1 xs:p-4 max-w-[16rem] min-h-full card-container__shadow ">
      <div className="flex items-center gap-4 xs:p-1">
        <img
          className="w-14 h-14 object-cover card-container--image__border p-1"
          src={avatar}
          alt={name}
          loading="lazy"
        />
        <h5 className="text-lg font-bold mb-4 text-center">{name}</h5>
      </div>
      <div className="mt-8">
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex  items-center justify-between">
          <a
            href={website}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300"
          >
            Website
          </a>
          <Button color="secondary">Editar</Button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
