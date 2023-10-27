interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <section>
      <h1 className="text-xl font-bold">Lista de pacientes</h1>
      {children}
    </section>
  );
};

export default Main;
