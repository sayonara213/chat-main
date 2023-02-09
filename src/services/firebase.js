import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import firebaseConfig from '../constants/firebaseConfig.json'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app
