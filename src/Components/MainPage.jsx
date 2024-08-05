import FormCreateBank from "./FormCreateBank";
import NavbarNavigation from "./Navbar";
import { Button } from "react-bootstrap";

function MainPage() {
  return (
    <div className="">
      <NavbarNavigation />
      <div className="container">
        <div className="flex justify-around">
          <FormCreateBank/>
          <h1>MainPage</h1>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
