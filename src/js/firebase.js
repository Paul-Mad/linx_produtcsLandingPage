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

export const setData = (newSubscriber) => ***REMOVED***
  //get the collection reference from firestore
  const ref = firestore.collection("subscribers");
  const batch = firestore.batch();
  const newRef = ref.doc();
  //Store new subscriber
  batch.set(newRef, newSubscriber);
  batch.commit();
***REMOVED***

export default firestore;
