import { initializeApp, firebase } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxFGQR97mYxlvg0fV4d_sdvj-TfxRGupg",
  authDomain: "fb-ak-clone.firebaseapp.com",
  projectId: "fb-ak-clone",
  storageBucket: "fb-ak-clone.appspot.com",
  messagingSenderId: "964409603562",
  appId: "1:964409603562:web:fe00af76f47148f7482e93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);
export const storage = getStorage(app);
