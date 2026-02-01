import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Authorities from "./components/Authorities";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MigrationButton from "./components/MigrationButton";

function App() {
  return (
    <Layout>
      <LanguageSwitcher />
      <MigrationButton />
      <Hero />
      <Stats />
      <Authorities />
    </Layout>
  );
}

export default App;
