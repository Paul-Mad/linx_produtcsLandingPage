import firebase from "firebase/app";
import "firebase/firestore";

const config = ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***,
***REMOVED***

//Initialize Firebase
firebase.initializeApp(config);
const firestore = firebase.firestore();

export default firestore;
