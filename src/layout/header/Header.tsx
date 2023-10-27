import hospitalIcon from "../../assets/hospital-user-svgrepo-com.svg";
import "./index.css";

const Header = () => {
  return (
    <header className="flex p-4 gap-4">
      <img
        className="w-7 h-7 md:w-9 md:h-9 mt-1"
        src={hospitalIcon}
        alt="hospital-logo"
      />
      <h2 className="text-xl font-bold capitalize md:text-3xl">
        Patient
        <span className="header--gradient__italic text-x bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text capitalize">
          FOLIO
        </span>
      </h2>
    </header>
  );
};

export default Header;
