import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Authorities from "./components/Authorities";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <Layout>
      <LanguageSwitcher />
      <Hero />
      <Stats />
      <Authorities />
    </Layout>
  );
}

export default App;
