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


// export const signUpWithEmailStart = (userDetails) => ({
//     type: UserActionTypes.SIGN_UP_WITH_EMAIL_START,
//     payload: userDetails
// })

// export const signUpWithEmailSuccess = (user) => ({
//     type: UserActionTypes.SIGN_UP_WITH_EMAIL_START,
//     payload: user
// })

// export const signUpWithEmailFailure = (error) => ({
//     type: UserActionTypes.SIGN_UP_WITH_EMAIL_START,
//     payload: error
// })