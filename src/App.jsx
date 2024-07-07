import "./App.css";
import FormSession from "./Components/FormSession";
import Navbar from "./Components/Navbar";
import PruebaFrom from "./Components/PruebaFrom";


function App() {

  return (
      <div className="main">
        <Navbar />
        <FormSession/>
        {/* <PruebaFrom/> esto solo sirve para pruebas, acuerdate de eliminarlo*/}
      </div>
    );
}

export default App;
