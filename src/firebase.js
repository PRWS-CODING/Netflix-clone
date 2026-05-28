import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBybPQTaNVvmXZCdS9vLyT68LJwjlQY0LE",
  authDomain: "netflix-clone-3d776.firebaseapp.com",
  projectId: "netflix-clone-3d776",
  storageBucket: "netflix-clone-3d776.firebasestorage.app",
  messagingSenderId: "636816377230",
  appId: "1:636816377230:web:aae34c33cee01f6e51d0df",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth).catch((error) => {
    console.error("Logout Error:", error);
  });
};

export { auth, db, login, signup, logout };
