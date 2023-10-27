import PatientsContainer from "./components/container/patients/PatientsContainer";
import Layout from "./layout/Layout";
import Main from "./layout/main/Main";

function App() {
  return (
    <Layout>
      <Main>
        <PatientsContainer />
      </Main>
    </Layout>
  );
}

export default App;
