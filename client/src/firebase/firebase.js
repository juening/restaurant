import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3BpkuLa7sspTiJhYqHgMISPrBa3bVzfI',
  authDomain: 'masterpiece-23fdd.firebaseapp.com',
  databaseURL: 'https://masterpiece-23fdd.firebaseio.com',
  projectId: 'masterpiece-23fdd',
  storageBucket: 'masterpiece-23fdd.appspot.com',
  messagingSenderId: '509671193838',
  appId: '1:509671193838:web:effee31cbfaace153807ff',
  measurementId: 'G-ZTC0755YQQ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('Error creating user ', err.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;