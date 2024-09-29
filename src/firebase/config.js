import { initializeApp } from 'firebase/app';
import { getStorage, uploadBytesResumable, getDownloadURL, ref as storRef } from 'firebase/storage';
import { ref as dbRef, set, push, getDatabase, onValue, get,
  orderByChild, query, serverTimestamp, remove } from 'firebase/database';


// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfBHeJFpZS1t73ZNlnE-X2hl84G48M7KY",
  authDomain: "firegram-tuto-d3f26.firebaseapp.com",
  projectId: "firegram-tuto-d3f26",
  storageBucket: "firegram-tuto-d3f26.appspot.com",
  messagingSenderId: "1004100313824",
  appId: "1:1004100313824:web:3ef8b38fbd73673b496685",
  databaseURL:"https://firegram-tuto-d3f26-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation des services Firebase
const projectFirestore = getDatabase(app)
const projectStorage = getStorage(app);
const timestamp = serverTimestamp()

export { projectStorage, projectFirestore, dbRef, set, storRef,
    uploadBytesResumable, getDownloadURL, onValue,  orderByChild, query, push, remove, get, timestamp };
