import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import { auth } from "../firebase";
import toastiSuccess from "../../Toasti-Messages/success-message";
import toastiError from "../../Toasti-Messages/bad-message";


export const emailAutentication = (email) => {
  const actionCodeSettings = {
    url: `http://localhost:5173`, // Asegúrate de que este URL esté autorizado
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12"
    },
    dynamicLinkDomain: "example.page.link",
    //Si utilizo 👆 necesito leer la docu en Firebase
  };
  console.log(actionCodeSettings);
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // El enlace de inicio de sesión ha sido enviado.
      toastiSuccess(`Enlace de autenticación enviado.`);
      // Guardar el correo electrónico en el almacenamiento local para que pueda ser recuperado después de la redirección
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      toastiError(`Error al enviar el enlace de autenticación 😵‍💫${error}`);
      console.log(error, error.message);
    });

  if (isSignInWithEmailLink(auth, window.location.href)) {

    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // El usuario ha sido autenticado.
        toastiSuccess("Usuario autenticado:", result.user);
        // Limpia el almacenamiento local
        window.localStorage.removeItem("emailForSignIn");
      })
      .catch((error) => {
        toastiError("Error al completar el registro:", error);
      });
  }
};
export default emailAutentication;
