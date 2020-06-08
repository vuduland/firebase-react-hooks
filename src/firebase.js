import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDGyD_Z8CO_8rJrZgrcw7ET4GFghGZg8YE',
	authDomain: 'just-clock-it-tutorial.firebaseapp.com',
	databaseURL: 'https://just-clock-it-tutorial.firebaseio.com',
	projectId: 'just-clock-it-tutorial',
	storageBucket: 'just-clock-it-tutorial.appspot.com',
	messagingSenderId: '564216091017',
	appId: '1:564216091017:web:53283657c28fbbbeda5158',
	measurementId: 'G-LH4M67LK64',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
