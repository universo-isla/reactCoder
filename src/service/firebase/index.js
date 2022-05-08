
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbFW6NMsYUABnrc8r9YzSy23SrFPRTK1A",
  authDomain: "ecommerceav-9c4f5.firebaseapp.com",
  projectId: "ecommerceav-9c4f5",
  storageBucket: "ecommerceav-9c4f5.appspot.com",
  messagingSenderId: "625792331985",
  appId: "1:625792331985:web:d70cfeb5af78cc7517d5f0"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);