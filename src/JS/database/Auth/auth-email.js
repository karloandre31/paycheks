import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../Firesbase/firebase";

export const emailForAutentication = (user) => {
  const actionCodeSettings = {
    url: `https://www.example.com/?email=${user.email}`,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    handleCodeInApp: true,
    dynamicLinkDomain: "example.page.link",
  };
  sendSignInLinkToEmail(auth, user, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};
