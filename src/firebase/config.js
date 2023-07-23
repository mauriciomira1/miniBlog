import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyABx1_1CGG9NC35i2Us8TEqDaPdIru5qJw",
  authDomain: "miniblog-14512.firebaseapp.com",
  projectId: "miniblog-14512",
  storageBucket: "miniblog-14512.appspot.com",
  messagingSenderId: "27057192199",
  appId: "1:27057192199:web:4051e26ce10116278a99a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 