import firebase from '../config/firebase-config';

const socialMediaAuth = (provider) =>
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => res.credential.accessToken)
		.catch((er) => er);

export default socialMediaAuth;
