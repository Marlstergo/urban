import UserActionTypes from './user.types'



export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const checkUserSession = (user) => ({
    type: UserActionTypes.CHECK_USER_SESSION,
    payload: user
})
export const signOutUserStart = () => ({
    type: UserActionTypes.SIGN_OUT_USER_START,
    
})
export const signOutUserSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_USER_SUCCESS,
    
})

export const signOutUserFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_USER_FAILURE,
    payload: error
})

export const signUpWithEmailStart = (userDetails) => ({
    type: UserActionTypes.SIGN_UP_WITH_EMAIL_START,
    payload: userDetails
})
export const signUpWithEmailSuccess = ({user, additionalData}) =>({
    type:UserActionTypes.SIGN_UP_WITH_EMAIL_SUCCESS,
    payload: {user, additionalData}
})
export const signUpWithEmailFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_WITH_EMAIL_FAILURE,
    payload: error
})

// export const signUpWithEmailSuccess = (user) => ({
//     type: UserActionTypes.SIGN_UP_WITH_EMAIL_START,
//     payload: user
// })

// export const signUpWithEmailFailure = (error) => ({
//     type: UserActionTypes.SIGN_UP_WITH_EMAIL_START,
//     payload: error
// })