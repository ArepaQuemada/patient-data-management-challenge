type Colors = "primary" | "secondary";

type Variant = "main" | "accent";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  color?: Colors;
  variant?: Variant;
}

type ColorClasses = {
  [key in Colors]: {
    [key in Variant]: {
      base: string;
      hover: string;
    };
  };
};

const colorClasses: ColorClasses = {
  primary: {
    main: {
      base: "bg-blue-500 text-white",
      hover: "hover:bg-blue-700 text-white",
    },
    accent: {
      base: "bg- text-blue",
      hover: "bg-transparent text-blue-700",
    },
  },
  secondary: {
    main: {
      base: "bg-red-500 text-white",
      hover: "hover:bg-red-700 text-white",
    },
    accent: {
      base: "bg-transparent text-red-500",
      hover: "bg-transparent text-red-700",
    },
  },
};

const Button = ({
  children,
  icon,
  color = "primary",
  variant = "main",
  ...rest
}: ButtonProps) => {
  const { base, hover } = colorClasses[color][variant];
  return (
    <button
      className={`t-4 ${base} ${hover} font-bold py-2 px-4 rounded transition-all ease-in-out duration-300 inline-block items-center gap-1`}
      {...rest}
    >
      <div className="flex gap-1 items-center">
        {icon && <span className=" h-5 w-5 inline-block">{icon}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
