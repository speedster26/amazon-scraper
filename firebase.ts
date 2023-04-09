import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDHMTwRRIw-ugiRMEmfpgiXKR0snhzlilk",
    authDomain: "bright-data-4aac5.firebaseapp.com",
    projectId: "bright-data-4aac5",
    storageBucket: "bright-data-4aac5.appspot.com",
    messagingSenderId: "161691669679",
    appId: "1:161691669679:web:10824eda9422cc2b08b05a"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };