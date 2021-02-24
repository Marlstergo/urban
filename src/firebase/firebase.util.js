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

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>  {
//     const collecctionRef = firestore.collection(collectionKey)

//     const batch = firestore.batch()

//     objectsToAdd.forEach(obj =>{
//         const newDocRef = collecctionRef.doc();
//         batch.set(newDocRef, obj)
//     })

//     return await batch.commit()
// }

export const convertCollectionsSnapshotToMap = (collections) =>{

    const transformedCollection = collections.docs.map(doc => {
        const {title , items} = doc.data()

    return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
    }
    }
    )

    return transformedCollection.reduce((accumulator, collection) =>{
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    },{})
    
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>(auth.signInWithPopup(googleProvider));

export default firebase;
