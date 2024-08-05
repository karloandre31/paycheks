import {
  updateProfile,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import toastiSuccess from "../../Toasti-Messages/success-message";
import user from "../../../img/user.png";
import toastiError from "../../Toasti-Messages/bad-message";

export function nameAndPhotoUpdate(name, photo = user) {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
      toastiSuccess("Todo fue bien 😄");
    })
    .catch((error) => {
      toastiError(`Oh no algo fue mal🤔, error: ${error.message}`);
    });
}

export async function emailUpdate(email, password) {
  const user = auth.currentUser;

  try {
    await reauthenticateWithCredential(user, password);
    try {
      updateEmail(auth.currentUser, email);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}
