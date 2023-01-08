import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAbxEoVwwBegiw2DgbIO13-TzGRkm-Pof4',
    authDomain: 'facebook-ui-6f536.firebaseapp.com',
    databaseURL: 'https://facebook-ui-6f536-default-rtdb.firebaseio.com',
    projectId: 'facebook-ui-6f536',
    storageBucket: 'facebook-ui-6f536.appspot.com',
    messagingSenderId: '981330345553',
    appId: '1:981330345553:web:2aba868806e6ce6f424270',
    measurementId: 'G-J8E1NRDSC4',
};

const app  = initializeApp(firebaseConfig)
export const db = getFirestore(app)