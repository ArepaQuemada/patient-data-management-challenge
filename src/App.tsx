import CreatePatientContainer from "./components/container/create-patient/CreatePatientContainer";
import EditPatientContainer from "./components/container/edit-patient/EditPatientContainer";
import PatientsContainer from "./components/container/patients/PatientsContainer";
import Layout from "./layout/Layout";
import Main from "./layout/main/Main";

function App() {
  return (
    <Layout>
      <Main>
        <PatientsContainer />
        <CreatePatientContainer />
        <EditPatientContainer />
      </Main>
    </Layout>
  );
}

export default App;
