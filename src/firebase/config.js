import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase obtenida de la consola
const firebaseConfig = {
  apiKey: "AIzaSyALKobQcHsxokausQIQaFTSHPhdf9LAV9w",
  authDomain: "libreria-universo-react.firebaseapp.com",
  projectId: "libreria-universo-react",
  storageBucket: "libreria-universo-react.firebasestorage.app",
  messagingSenderId: "752698325161",
  appId: "1:752698325161:web:ac20e475543a3d991fd1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos Firestore para usar la base de datos en el e-commerce
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };