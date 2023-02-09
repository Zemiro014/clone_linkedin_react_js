import { auth, provider } from "../firebaseConfig";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then( payload => {
            dispatch(setUser(payload.user))
        })
        .catch(error => {
            console.log(error.message)
        })
    }
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUser(user))
            }
        })
    }
}

export function SignOutAPI(){
    return (dispatch) => {
        auth.signOut()
        .then(() => {
            dispatch(setUser(null))
        })
        .catch(error => {
            console.log(error.message)
        })
    }
}