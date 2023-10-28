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
    <div className="bg-slate-100 rounded-lg p-1 max-w-[18rem] relative card-container__shadow ">
      <img
        className="w-14 h-14 object-cover absolute left-0 right-0 -top-5 m-auto card-container--image__border p-1"
        src={avatar}
        alt={name}
        loading="lazy"
      />
      <div className="p-4 mt-8">
        <h5 className="text-lg font-bold mb-4 text-center">{name}</h5>
        <p className="text-gray-700 text-base">{description}</p>
        <a
          href={website}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300"
        >
          Visit Website
        </a>
        <Button color="secondary">Editar</Button>
      </div>
    </div>
  );
};

export default PatientCard;
