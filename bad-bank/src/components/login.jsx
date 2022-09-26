import React from "react"
import { Memo } from "../App.js";
import { Card, UserContext } from "../context/context.jsx"
import toast from "./toast.js"

function Login() {
    const [emailValue, setEmail] = React.useState(null)
    const [passwordValue, setPassword] = React.useState(null)
    const [status] = React.useState('')
    const [disabled, setDisabled] = React.useState(true)
    const [show, setShow] = React.useState(true)

    const ctx = React.useContext(UserContext);
    const authentication = () => {
        const user = ctx.users.find(item => {
            const { email, password } = item
            return emailValue === email && passwordValue === password
        })

        if (user === undefined) {
            toast('User not authenticated', false)
            return
        }


        Memo.activeUser = user
        toast('Login with success', true)
        setShow(false)
    }

    const disableButton = (email, password) => {
        if (email === '' && password === '') {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }

    const clearForm = () => {
        setDisabled(true)
        setShow(true)
    }

    return (
        <Card
            height="20rem"
            width="20rem"
            bgcolor='info'
            header="Login"
            status={status}
            body={show ? (
                <>
                    <input id="emailInput" className="form-control" placeholder="Email" onChange={(e) => {
                        setEmail(e.currentTarget.value)
                        disableButton(e.currentTarget.value, passwordValue)
                    }}></input>
                    <input id="passwordInput" type="password" className="form-control" placeholder="Password" onChange={(e) => {
                        setPassword(e.currentTarget.value)
                        disableButton(emailValue, e.currentTarget.value)
                    }}></input>
                    <button className="btn btn-light" onClick={authentication} disabled={disabled}>Submit</button>
                </>
            ) : (
                <>
                    <h5>You logged in with success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Login again</button>
                </>
            )}
        />
    );
}

export default Login