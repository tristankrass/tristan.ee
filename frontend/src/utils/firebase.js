const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAN,
  databaseURL: process.env.FB_DB_URL,
  projectId: process.env.PROJECT_ID,
  messagingSenderId: process.env.FB_MESSAGE_ID,
  appId: process.env.FB_APP_ID,
};

let firebaseInstance;
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance;
  }
  firebase.initializeApp(config);
  firebaseInstance = firebase;

  return firebase;
};

// export const app = firebase.app();
// export const auth = firebase.auth();
// export const functions = firebase.functions();
