import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const getBank = () => {
  const banksCollectionRef = collection(db, "banks");

  return new Promise((resolve, reject) => {
    const banks = [];
    const unsubscribe = onSnapshot(
      banksCollectionRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          banks.push({ id: doc.id, ...doc.data() });
        });
        resolve(banks);
        unsubscribe(); // Desuscribirse después de obtener los datos iniciales
      },
      (error) => reject(error)
    );
  });
};



export const getChecks = (params) => {};
