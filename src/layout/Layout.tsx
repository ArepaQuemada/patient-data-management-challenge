import Header from "./header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="p-4 sm:px-10 h-screen mt-16">{children}</main>
    </>
  );
};

export default Layout;
