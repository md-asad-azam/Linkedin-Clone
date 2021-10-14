import React, { useState } from 'react'
import "./Login.css"
import { 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword 
} from "firebase/auth";
import { login } from '../features/counter/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';

export default function Login() {

    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: imgUrl
                })
                    .then(() => {
                        dispatch(login({
                            email: userCredential.user.email,
                            uid: userCredential.user.uid,
                            displayName: name,
                            photoURL: imgUrl
                        }))
                    })

            }).catch((err) => alert(err))
    }
    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(userCredential => {
            dispatch(login({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                photoURL: userCredential.user.photoURL
            }))
        }).catch(err => alert(err))
    }

    return (
        <div className="login">
            <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt="" />

            <form action="/">
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name (Required if regestering)" required />

                <input value={imgUrl} onChange={e => setImgUrl(e.target.value)} type="text" placeholder="Profile picture's URL (Optional)" />

                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />

                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Your password here" />

                <button type="submit" onClick={loginToApp}>Sign in</button>

            </form>

            <p>Not a member? <span className="login_register" onClick={register}>Register Now</span> </p>

        </div>
    )
}
