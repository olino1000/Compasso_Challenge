import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBKJsZP6BUlivuybmvsyUCfT2WccOSAhAw',
	authDomain: 'compasso-challenge.firebaseapp.com',
	projectId: 'compasso-challenge',
	storageBucket: 'compasso-challenge.appspot.com',
	messagingSenderId: '346426004229',
	appId: '1:346426004229:web:3f38341d1ea111f8435d6c',
	measurementId: 'G-G1X851XG6F',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
