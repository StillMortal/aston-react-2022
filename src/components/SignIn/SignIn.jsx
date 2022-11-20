// https://github.com/AkajithAk/SignInSignUpLoginWithLocalStorage/tree/main/src/SignInSignUp

import {useEffect, useRef, useState} from "react";
import classes from "./SignIn.module.css";

function SignIn() {
    const email = useRef()
    const password = useRef()
    const [show, setShow] = useState(false)
    const localName = localStorage.getItem("name")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")
    useEffect(() => {
        if (localEmail) {
            setShow(true)
        }
    })

    const handleSignIn = () => {
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value)
            window.location.replace("/")
        } else {
            alert("Please Enter valid Credential")
        }
    }
    return (
        <div>
            {show ?
                <div className={classes.container}>
                    <h1>Hello {localName}</h1>
                    <div className={classes.input_space}>
                        <input placeholder="Email" type='text' ref={email}/>
                    </div>
                    <div className={classes.input_space}>
                        <input placeholder="Password" type='password' ref={password}/>
                    </div>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className={classes.container}>
                    <h1>The user does not exist. Please sign up</h1>
                </div>
            }
        </div>
    );
}

export default SignIn;