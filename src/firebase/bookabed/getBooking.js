import { getFirestore, getDocs, collection } from 'firebase/firestore';
import firebaseApp from '../config';

const firestore = getFirestore(firebaseApp);

export const getResidents = async () => {
    const collectionRef = collection(firestore, 'booking');
    try {
        const documents = [];

        const querySnapshot = await getDocs(collectionRef);

        querySnapshot.forEach(doc => {
            documents.push({
                id: doc.id,
                data: doc.data(),
            });
        });

        console.log(documents, 'Documents here');
        return documents;
    } catch (error) {
        console.error('Error getting documents: ', error);
        return [];
    }
};
