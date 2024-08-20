import { collection, addDoc, query, or, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import toastiError from "../../Toasti-Messages/bad-message";
import toastiSuccess from "../../Toasti-Messages/success-message";
import { onAuthStateChanged } from "firebase/auth";
import { getDocumentsFromFirebase } from "./get-check-and-bank";

// Add a new document with a generated id.
let autenticUser = null;
onAuthStateChanged(auth, (user) => {
  if (user) {
    autenticUser = user;
  }
});
export async function addNewBank(newBank) {
  if (!autenticUser) {
    toastiError(`No estás autenticado 🤔`);
    return;
  }

  try {
    const existingBanks = await getDocumentsFromFirebase("banks");

    // Verificar si el banco ya existe
    const bankExists = existingBanks.some(({ bank }) => bank === newBank);

    if (bankExists) {
      toastiError(`Ese banco ya está agregado`);
      return;
    }

    const banksCollection = collection(db, "banks");
    await addDoc(banksCollection, {
      bank: newBank,
      userId: autenticUser.uid,
    });
    toastiSuccess(`${newBank} agregado exitosamente`);
  } catch (error) {
    toastiError(`Oh no, hubo un error 🤕: ${error.message}`);
  }
}

export async function addNewChek(bankFromUser, check) {
  try {
    const bank = query(
      collection(db, "checks"),
      or(where("id", "==", bankFromUser.id))
    );
    const { numeroDeCheque, proveedor, fecha, monto } = check;
    await addDoc(bank, {
      numeroDeCheque: Number(numeroDeCheque),
      proveedor,
      fecha,
      monto: Number(monto),
    });
    return toastiSuccess("Cheque Agregado ✔️");
  } catch (error) {
    return toastiError(`No se agregó correctamente 😐.Error: ${error.message}`);
  }
}

