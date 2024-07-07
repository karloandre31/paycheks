import toastiError from "../../Toasti-Messages/bad-message";
import toastiSuccess from "../../Toasti-Messages/success-message";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const createUserPassAndEmail = (email, password, nombre) => {
  createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      user.displayName = nombre;
      // ...

      const actionCodeSettings = {
        url: "localhost/?email=" + user.email, // Asegúrate de que este URL esté autorizado
        iOS: {
          bundleId: "com.example.ios",
        },
        android: {
          packageName: "com.example.android",
          installApp: true,
          minimumVersion: "12",
        },
        handleCodeInApp: true,
        dynamicLinkDomain: "example.page.link", // Asegúrate de configurar esto si estás usando Dynamic Links
      };

      // Enviar el correo de verificación
      sendEmailVerification(user, actionCodeSettings)
        .then(() => {
          toastiSuccess("Correo de verificación enviado 🐱");
        })
        .catch((error) => {
          toastiError(`Error al enviar el correo de verificación 🥶:${error}`);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toastiError(
        `Oh no algo ha ido mal 😣:${errorMessage}. Codigo de error:${errorCode}`
      );
    });
};

export const emailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      user.displayName
        ? toastiSuccess(`Bienvenido ${user.displayName} 😁`)
        : toastiSuccess(
            `Bienvenido Desconocido 😁. Quiero saludarte por tu nombre, 
            así que te invito a ponerlo en configuracion porfavor, gracias🤓`
          );
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;

      /*
       *Aqui estoy reemplazando al típico switch, hace el mismo trabajo, pero mas:
       * -mantenible: Usar un objeto para los mensajes de error es generalmente más limpio y fácil de mantener.
       * -legible: El código utilizando un objeto es más conciso y puede ser más fácil de leer para otros desarrolladores.
       * -Escalable:  Si tu lista de posibles errores crece, el método con objeto puede ser más manejable y menos propenso a errores.
       * La diferencia con Switch, es que es un Switch es un poco mas rápido(por milesimas de segundo)
       */
      const codesErrors = {
        "auth/user-not-found":
          "No existe una cuenta con este correo electrónico. Por favor, verifica tu correo electrónico o regístrate.",
        "auth/wrong-password":
          "La contraseña es incorrecta. Por favor, inténtalo de nuevo.",
        "auth/invalid-email":
          "El formato del correo electrónico no es válido. Por favor, verifica e inténtalo de nuevo.",
        "auth/user-disabled":
          "La cuenta de usuario ha sido deshabilitada. Por favor, contacta con soporte.",
        "auth/too-many-requests":
          "Demasiados intentos fallidos de inicio de sesión. Por favor, intenta de nuevo más tarde.",
      };
      const errorMessage =
        codesErrors[errorCode] ||
        `Un error inesperado🥶. Código de error: ${errorCode}`;

      toastiError(`Hubo un error 🤔: ${errorMessage}`);
    });
};
