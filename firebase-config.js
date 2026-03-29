import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-pOkvoJaNOGMyXVYPRFSej6HVu8mc_ns",
  authDomain: "boris-research-hub.firebaseapp.com",
  databaseURL: "https://boris-research-hub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "boris-research-hub",
  storageBucket: "boris-research-hub.firebasestorage.app",
  messagingSenderId: "71055508172",
  appId: "1:71055508172:web:72229e3f5ad664eb35b869"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export default app;
