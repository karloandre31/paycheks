import "./App.css";
import FormSession from "./Components/FormSession";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./Components/MainPage";
import { Route, Routes } from "react-router";
import Bolivariano from "./Components/Banks/Bolivariano";
import Pichincha from "./Components/Banks/Pichincha";
import Settings from "./Components/Settings";
import ModelOfBank from "./Components/Banks/ModelOfBank";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<FormSession />} />
      <Route path="/Bolivariano" element={<Bolivariano />} />
      <Route path="/Pichincha" element={<Pichincha />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/ModelOfBank" element={<ModelOfBank />} />
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
