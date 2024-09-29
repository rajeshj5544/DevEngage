/* Firebase SDK*/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAg6L0RIHcEcu9CCtwsxTaDx3nfn8nIYR0",
  authDomain: "devengage-ffd75.firebaseapp.com",
  databaseURL: "https://devengage-ffd75-default-rtdb.firebaseio.com",
  projectId: "devengage-ffd75",
  storageBucket: "devengage-ffd75.appspot.com",
  messagingSenderId: "292550239608",
  appId: "1:292550239608:web:ea6b82e8212457fd7d548d",
  measurementId: "G-LLD3HWHKGV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
