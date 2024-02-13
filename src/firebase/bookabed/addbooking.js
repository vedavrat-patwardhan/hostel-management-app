
import firebaseApp from "../config";
import { getFirestore, collection, addDoc } from "firebase/firestore"

const firestore = getFirestore(firebaseApp);

const bookbed = async (values) => {
    let bedData = null;
    let error = null;
    try {
        const docRef = await addDoc(collection(firestore, "booking"), values);
        bedData = docRef;
    } catch (e) {
        error = e;
    }
    return { bedData, error };
};

export default bookbed;
