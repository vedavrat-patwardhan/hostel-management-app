import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

const getExpense = async () => {
    try {
        const documents = [];
        const QueySnapshot = await getDocs(collection(firestore, 'expenses'));
        QueySnapshot.forEach(doc => {
            documents.push({
                id: doc.id,
                data: doc.data(),
            });
        });
        console.log(documents, 'Expenses data');
        return documents;
    } catch (e) {
        console.error('Error getting documents: ', error);
        return [];
    }
};
export default getExpense;
