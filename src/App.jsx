import "./App.css";
import FormSession from "./Components/FormSession";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./Components/MainPage";
import { Route, Routes } from "react-router";
import Settings from "./Components/Settings";
import ModelOfBank from "./Components/Banks/ModelOfBank";
import CreateLinksToBanks from "./Components/CreateLinksToBanks";
import Ableton from "./Components/Pruebas/Ableton";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<FormSession />} />
      <Route path="/CreateLinksToBank" element={<CreateLinksToBanks />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/:bank" element={<ModelOfBank />} />
      <Route path="/Ableton" element={<Ableton />} />
    </Routes>
  );
}

export default App;

{
  /* <Navbar /> */
}
{
  /* <FormSession/> */
}
{
  /* <PruebaFrom/> esto solo sirve para pruebas, acuerdate de eliminarlo*/
}
{
  /* {booleanShowMainPage ? <MainPage /> : <FormSession />} */
}
