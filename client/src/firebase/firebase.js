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

export const addCollectionAndDocuments = async (
  collectionKey,
  documentsArray
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  documentsArray.forEach((doc) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, doc);
  });

  return await batch.commit();
};

export const convertCollectionToMap = (collectionSnapshot) => {
  const transformedCollection = collectionSnapshot.docs.map((doc) => {
    const { title, items, sort } = doc.data();
    return {
      title,
      items,
      id: doc.id,
      sort,
      routeName: encodeURI(title.toLowerCase()),
    };
  });

  return transformedCollection
    .sort((doc1, doc2) => doc1.sort - doc2.sort)
    .reduce((acc, collection) => {
      acc[collection.title.toLowerCase().split(' ').join('')] = collection;
      return acc;
    }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
