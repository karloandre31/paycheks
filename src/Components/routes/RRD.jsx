import { Route, Routes } from "react-router";
import Bolivariano from "../Banks/Bolivariano";
import Pichincha from "../Banks/Pichincha";
import App from "../../App";

<Routes>
  <Route path="/" element={<App />} />
  <Route path="Bolivariano" element={<Bolivariano />} />
  <Route path="Pichincha" element={<Pichincha />} />{" "}
</Routes>;
