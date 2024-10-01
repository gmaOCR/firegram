import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytesResumable, getDownloadURL, ref as storRef } from 'firebase/storage';
import { ref as dbRef, set, push, getDatabase, onValue, get,
  orderByChild, query, serverTimestamp, remove } from 'firebase/database';

  console.log(process.env.REACT_APP_FIREBASE_DATABASE_URL);


// Configuration Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation des services Firebase
const projectFirestore = getDatabase(app)
const projectStorage = getStorage(app);
const timestamp = serverTimestamp()

export { projectStorage, projectFirestore, dbRef, set, storRef,
    uploadBytesResumable, getDownloadURL, onValue,  orderByChild, query, push, remove, get, timestamp };
