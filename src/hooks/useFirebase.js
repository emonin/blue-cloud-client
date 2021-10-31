import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../firebase/firebase.init";

initializeAuth();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [errorCode, setErrorCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value)
  };
  const signInWithEmailPass = () => {
    return signInWithEmailAndPassword(auth, email, password)
  };
  const signUpWithEmailPass = () => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { });
  }
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [])

  return {
    user,
    error,
    errorCode,
    name,
    email,
    password,
    isLoading,
    setIsLoading,
    setUser,
    setError,
    setErrorCode,
    logOut,
    handleName,
    handleEmail,
    handlePassword,
    signInWithEmailPass,
    signUpWithEmailPass,
    signInWithGoogle,
    setUserName,
  }

}

export default useFirebase;