import { all, call, put, takeLatest} from 'redux-saga/effects'

import UserActionTypes from './user.types'
import { googleSignInSuccess, googleSignInFailure } from "./user.action";
import { createUserProfileDocument, googleProvider, auth} from '../../firebase/firebase.util'





export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef =yield call(createUserProfileDocument, user)       
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(googleSignInFailure())
    }
}


export function* onGoogleSigninStart (){ 
    yield (takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle))
}

export function* userSagas(){
    yield all([call(onGoogleSigninStart)])
}