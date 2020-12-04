import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCTyDHjx2SNircz8h0I0uaDnGyLx3PV7o8",
  authDomain: "test-db-4aa92.firebaseapp.com",
  databaseURL: "https://test-db-4aa92.firebaseio.com",
  projectId: "test-db-4aa92",
  storageBucket: "test-db-4aa92.appspot.com",
  messagingSenderId: "532911063400",
  appId: "1:532911063400:web:737f284830b529fe3ed6dd",
  measurementId: "G-V05SCC6LXF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;