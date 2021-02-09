import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDjMxB2L7vtw5ZFzQOvx51umYIhf5aOZlw",
        authDomain: "urban-db-fd7fb.firebaseapp.com",
        projectId: "urban-db-fd7fb",
        storageBucket: "urban-db-fd7fb.appspot.com",
        messagingSenderId: "387485079203",
        appId: "1:387485079203:web:ebaf9af6e4a1ff33111116",
        measurementId: "G-V2RWQQJG41"
    }

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const{displayName, email} = userAuth;
        const createdAt = new Date();
    
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error){
            console.log('error creating user', error.message)
        }
    }


    
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const prov = new firebase.auth.FacebookAuthProvider()
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =()=>(auth.signInWithPopup(provider));

export default firebase;
