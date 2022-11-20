import {useEffect, useRef, useState} from "react";
import App from "../../App";
import classes from "./SignUp.module.css";

function SignUp() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome, setShowHome] = useState(false)
    const localSignUp = localStorage.getItem("signUp")
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
    })
    const handleClick = () => {
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", email.current.value)
            alert("Account created successfully!!")
            window.location.replace("/")
        }
    }

    return (
        <div>
            {showHome ? <App/> :
                (<div className={classes.container}>
                    <div className={classes.input_space}>
                        <input placeholder="Name" type='text' ref={name}/>
                    </div>
                    <div className={classes.input_space}>
                        <input placeholder="Email" type='text' ref={email}/>
                    </div>
                    <div className={classes.input_space}>
                        <input placeholder="Password" type='password' ref={password}/>
                    </div>
                    <button onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}

export default SignUp;