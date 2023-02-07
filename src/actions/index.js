import { auth, provider } from "../firebaseConfig";

export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then( payload => {
            console.log(payload)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
}