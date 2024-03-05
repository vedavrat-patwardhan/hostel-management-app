import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

export const getExpense = async () => {
    try {
        const documents = [];
        const QueySnapshot = await getDocs(collection(firestore, 'expenses'));
        QueySnapshot.forEach(doc => {
            documents.push({
                id: doc.id,
                data: doc.data(),
            });
        });
        console.log(documents, 'This is documents');
        return { status: 200, data: documents };
    } catch (error) {
        return { status: 404, message: error };
    }
};
