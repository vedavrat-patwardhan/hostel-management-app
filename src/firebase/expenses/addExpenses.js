import { getFirestore, addDoc, collection } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);
const addExpense = async values => {
    let expenseData = null;
    let error = null;
    try {
        const docRef = await addDoc(collection(firestore, 'expenses'), values);
        expenseData = docRef;
    } catch (e) {
        error = e;
    }
    return { expenseData, error };
};
export default addExpense;
