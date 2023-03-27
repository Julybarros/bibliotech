import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKgJrOJD_ycdPVyOulz1T3ggsnv5WnwwU",
  authDomain: "bibliotech-july.firebaseapp.com",
  projectId: "bibliotech-july",
  storageBucket: "bibliotech-july.appspot.com",
  messagingSenderId: "14670076711",
  appId: "1:14670076711:web:a75d7cc67fe03cc1cb2702"
};


// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);

// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);

// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);

// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);