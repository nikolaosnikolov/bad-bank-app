import React from "react"
import { Memo } from "../App.js";
import { Card, UserContext } from "../context/context.jsx"
import toast from "./toast.js"

function Login() {
    const [emailValue, setEmail] = React.useState(null)
    const [passwordValue, setPassword] = React.useState(null)
    const [status] = React.useState('')
    const [show, setShow] = React.useState(true)
    console.log('Memo', Memo)

    const ctx = React.useContext(UserContext);
    const authentication = () => {
        const user = ctx.users.find(item => {
            const { email, password } = item
            return emailValue === email && passwordValue === password
        })

        if (user === undefined) {
            console.log('User cannot be authenticated')
            return
        }


        Memo.activeUser = user
        console.log('user data', Memo.activeUser)
        setShow(false)
        toast('Login with success', false)
    }

    const clearForm = () => {
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
                    <input id="emailInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input id="passwordInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={authentication}>Submit</button>
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