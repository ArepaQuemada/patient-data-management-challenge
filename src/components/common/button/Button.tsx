type Colors = "primary" | "secondary";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  color?: Colors;
}

type ColorClasses = {
  [key in Colors]: {
    base: string;
    hover: string;
  };
};

const colorClasses: ColorClasses = {
  primary: {
    base: "bg-blue-500",
    hover: "hover:bg-blue-700",
  },
  secondary: {
    base: "bg-red-500",
    hover: "hover:bg-red-700",
  },
};

const Button = ({
  children,
  icon,
  color = "primary",
  ...rest
}: ButtonProps) => {
  const { base, hover } = colorClasses[color];
  return (
    <button
      className={`t-4 ${base} ${hover} text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300 inline-block items-center gap-1`}
      {...rest}
    >
      <div className="flex gap-1 items-center">
        {icon && <span className=" h-5 w-5 inline-block">{icon}</span>}
        {children}
      </div>
    </button>
  );
};

export default Button;
