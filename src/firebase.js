import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAenth_flVc6_0ATOMvu3FHH_5eHv3quyk",
    authDomain: "my-own-money-4e5e4.firebaseapp.com",
    projectId: "my-own-money-4e5e4",
    storageBucket: "my-own-money-4e5e4.appspot.com",
    messagingSenderId: "1005145447483",
    appId: "1:1005145447483:web:26e4de96705ed6de1d901e",
    measurementId: "G-G55LR44HN1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
