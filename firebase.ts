import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXwqI2n8SooiqhmWksfJC2eYKTikqD0WM",
    authDomain: "brightdata--scrapper-2eb9f.firebaseapp.com",
    projectId: "brightdata--scrapper-2eb9f",
    storageBucket: "brightdata--scrapper-2eb9f.appspot.com",
    messagingSenderId: "61117361596",
    appId: "1:61117361596:web:8dcacd445d4a0ea5820fb9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
