import { getAuth, signOut } from "firebase/auth";
import toastiSuccess from "../../Toasti-Messages/success-message";
import toastiError from "../../Toasti-Messages/bad-message";

const signOutEmail = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      toastiSuccess("Bye 😁");
    })
    .catch((error) => {
      toastiError(`Hubo algún error al cerrar sesión: ${error}`);
    });
};

export default signOutEmail;