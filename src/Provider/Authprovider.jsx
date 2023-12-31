import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

// google authenication

const provider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logged in user

  const loggedUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google signup

  const googleSignUp = () => {
    return signInWithPopup(auth, provider);
  };

  // signout

  const loggOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onAuth state change ======> user management

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    loggedUser,
    loggOut,
    googleSignUp,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
