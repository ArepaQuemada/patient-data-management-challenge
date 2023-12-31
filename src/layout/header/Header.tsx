import hospitalIcon from "../../assets/hospital-user-svgrepo-com.svg";
import Button from "../../components/common/button/Button";
import avatar from "../../assets/user-plus-alt-1-svgrepo-com.svg";
import "./index.css";
import { useModalsStore } from "@src/hooks/store/modals/useModalsStore";

const Header = () => {
  const { setStateCreateModal } = useModalsStore();

  return (
    <header
      className={`bg-white flex p-4 gap-4 sm:px-10 fixed top-0 z-10 w-full overflow-hidden`}
    >
      <img
        className="w-7 h-7 md:w-9 md:h-9 mt-1"
        src={hospitalIcon}
        alt="hospital-logo"
      />
      <h2 className="text-xl font-bold capitalize md:text-3xl flex-1">
        Patient
        <span className="header--gradient__italic text-x bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text capitalize">
          FOLIO
        </span>
      </h2>
      <div className="hidden xs:block">
        <Button
          color="secondary"
          onClick={() => {
            setStateCreateModal(true);
          }}
          icon={<img src={avatar} />}
        >
          Crear paciente
        </Button>
      </div>
      <div className="block xs:hidden">
        <Button
          color="secondary"
          icon={<img src={avatar} />}
          onClick={() => {
            setStateCreateModal(true);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
