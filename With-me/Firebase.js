import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, set, update, remove, get } from 'firebase/database';

// Your new Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDxVst_3_mi57ZeAYXa1SbTdysB5MVGhZ4",
  authDomain: "layanr-592a3.firebaseapp.com",
  databaseURL: "https://layanr-592a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "layanr-592a3",
  storageBucket: "layanr-592a3.appspot.com",
  messagingSenderId: "829248876910",
  appId: "1:829248876910:web:31f4258f2e16fdb433d17f",
  measurementId: "G-NH2008J0D2"
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const database = getDatabase(app);

// Export what you need
export { database, ref, set, update, remove, get };


