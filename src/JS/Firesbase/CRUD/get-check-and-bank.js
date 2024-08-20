import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const getDocumentsFromFirebase = (document) => {
  const banksCollectionRef = collection(db, document);

  return new Promise((resolve, reject) => {
    const documents = [];
    const unsubscribe = onSnapshot(
      banksCollectionRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          console.log(source, doc.data());
        });
        
        resolve(documents);
        unsubscribe(); // Desuscribirse después de obtener los datos iniciales
      },
      (error) => reject(error)
    );
  });
};



