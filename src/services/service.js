import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    GoogleAuthProvider,
} from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";
import {firestore} from "./firebase";
import {auth} from "./firebase";

import "react-toastify/dist/ReactToastify.css";

export const register = async (user) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
        const user = userCredential.user;
        addDoc(collection(firestore, "users"), {
            uid: user.uid,
            email: user.email,
            authProvider: "local",
        });
        return user;
    }).catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/email-already-in-use') {
            const error = new Error("Email already registered")
            error.code = "400"
            throw error;
        } else {
            const error = new Error("Registration failed")
            error.code = "401"
            throw error;
        }
    });
}

export const login = async (user) => {
    await signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
        return userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/wrong-password') {
            const error = new Error("Wrong password")
            error.code = "400"
            throw error;
        } else {
            const error = new Error("There is no such user")
            error.code = "401"
            throw error;
        }
    });
}

export const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        addDoc(collection(firestore, "users"), {
            uid: user.uid,
            email: user.email,
            authProvider: "google",
        });
        return user;
    }).catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/account-exists-with-different-credential') {
            const error = new Error("Email already registered")
            error.code = "400"
            throw error;
        } else {
            const error = new Error("Registration failed")
            error.code = "401"
            throw error;
        }
    });
}

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
        return result.user;
    }).catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/account-exists-with-different-credential') {
            const error = new Error("Email already registered")
            error.code = "400"
            throw error;
        } else {
            const error = new Error("Registration failed")
            error.code = "401"
            throw error;
        }
    });
}

export const resetPassword = async (email) => {
    if(email === undefined) {
        const error = new Error("Write your email")
        error.code = "400"
        throw error;
    }
    await sendPasswordResetEmail(auth, email).then(() => {
        return true;
    }).catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/user-not-found') {
            const error = new Error("There is no such user")
            error.code = "400"
            throw error;
        } else {
            const error = new Error("Reset password failed")
            error.code = "401"
            throw error;
        }
    });
}