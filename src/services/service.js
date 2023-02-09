import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    updateProfile,
} from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import { firestore, storage, auth } from './firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import 'react-toastify/dist/ReactToastify.css'
import { nicknameGenerator } from './nickname-generator'
import { createAvatar } from './avatar-generator'

export const register = async (user) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user

            createAvatar(user.email)
                .then((res) => res.data)
                .then((blobFile) => {
                    const fileRef = ref(
                        storage,
                        `avatars/${user.uid}/avatar.png`
                    )
                    uploadBytesResumable(fileRef, blobFile)
                        .then((snapshot) => {
                            console.log('Uploaded a blob or file!')
                            getDownloadURL(snapshot.ref).then((url) => {
                                updateProfile(auth.currentUser, {
                                    displayName: nicknameGenerator(user.email),
                                    photoURL: url,
                                }).then(() => {
                                    addDoc(collection(firestore, 'users'), {
                                        uid: user.uid,
                                        email: user.email,
                                        authProvider: 'email',
                                        username: nicknameGenerator(user.email),
                                        avatar: url,
                                    })
                                })
                            })
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })

            return user
        })
        .catch((error) => {
            const errorCode = error.code
            if (errorCode === 'auth/email-already-in-use') {
                const error = new Error('Email already registered')
                error.code = '400'
                throw error
            } else {
                const error = new Error('Registration failed')
                error.code = '401'
                throw error
            }
        })
}

export const login = async (user) => {
    await signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            return userCredential.user
        })
        .catch((error) => {
            const errorCode = error.code
            if (errorCode === 'auth/wrong-password') {
                const error = new Error('Wrong password')
                error.code = '400'
                throw error
            } else {
                const error = new Error('There is no such user')
                error.code = '401'
                throw error
            }
        })
}

export const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            addDoc(collection(firestore, 'users'), {
                uid: user.uid,
                email: user.email,
                username: user.displayName,
                authProvider: 'google',
                avatar: user.photoURL,
            })
            return user
        })
        .catch((error) => {
            const errorCode = error.code
            if (errorCode === 'auth/account-exists-with-different-credential') {
                const error = new Error('Email already registered')
                error.code = '400'
                throw error
            } else {
                const error = new Error('Registration failed')
                error.code = '401'
                throw error
            }
        })
}

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
        .then((result) => {
            return result.user
        })
        .catch((error) => {
            const errorCode = error.code
            if (errorCode === 'auth/account-exists-with-different-credential') {
                const error = new Error('Email already registered')
                error.code = '400'
                throw error
            } else {
                const error = new Error('Registration failed')
                error.code = '401'
                throw error
            }
        })
}

export const resetPassword = async (email) => {
    if (email === undefined) {
        const error = new Error('Write your email')
        error.code = '400'
        throw error
    }
    await sendPasswordResetEmail(auth, email)
        .then(() => {
            return true
        })
        .catch((error) => {
            const errorCode = error.code
            if (errorCode === 'auth/user-not-found') {
                const error = new Error('There is no such user')
                error.code = '400'
                throw error
            } else {
                const error = new Error('Reset password failed')
                error.code = '401'
                throw error
            }
        })
}
