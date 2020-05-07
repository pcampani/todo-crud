import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyBI6bv35jzkuYZEsknyqINS7AsWykveXQY",
	authDomain: "portfolio-f8102.firebaseapp.com",
	databaseURL: "https://portfolio-f8102.firebaseio.com",
	projectId: "portfolio-f8102",
	storageBucket: "portfolio-f8102.appspot.com",
	messagingSenderId: "378377315115",
	appId: "1:378377315115:web:450a1ccce3fab532c29b6e"
};
// Initialize Firebase
firebase.initializeApp(config);
export const db = firebase.firestore();