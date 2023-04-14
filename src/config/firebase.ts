import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let app: FirebaseApp | undefined = undefined;

const config = {
	apiKey: import.meta.env.VITE_APP_FB_API_KEY,
	authDomain: import.meta.env.VITE_APP_FB_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_APP_FB_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_FB_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FB_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_FB_APP_ID,
};

if (getApps().length === 0 || !app) {
	app = initializeApp(config);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
