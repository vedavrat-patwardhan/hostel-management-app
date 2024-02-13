import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import firebaseApp from '../config';

const auth = getAuth(firebaseApp);

const signIn = async (email, password) => {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default signIn;
