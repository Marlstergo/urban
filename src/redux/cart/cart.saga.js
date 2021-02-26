import { all, call, put, takeLatest} from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import { clearCart } from "./cart.action";

export function* clearCartItems(){
    yield put(clearCart())
}

export function* onSignOutUser (){ 
    yield (takeLatest(UserActionTypes.SIGN_OUT_USER_SUCCESS, clearCartItems))
}

export function* cartSagas(){
    yield all([
        call(onSignOutUser)
        ])
}

