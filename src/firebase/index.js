import firebase from './firebaseConfig';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
