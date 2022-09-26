import React from 'react'
import { Memo } from "../App.js";
import {Card} from "../context/context.jsx"
import toast from './toast.js';

function Deposit() {
    const [show, setShow] = React.useState(true)
    const [deposit, setDeposit] = React.useState(0);
    const [status] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('')
    const [disabled, setDisabled] = React.useState(true)
    const [wholeMoney, setWholeMoney] = React.useState(Memo.activeUser ? Memo.activeUser.balance : 0);

    const depositFn = () => {
        if (isNaN(deposit)) {
            toString(deposit)
            setErrorMessage('*Deposit value must be a number')
            return;
        }
        if (deposit < 0) {
            setErrorMessage('*Deposit value must be a positive number')
            return;
        }
        if (Memo.activeUser) {
            setErrorMessage('')
            Memo.activeUser.balance += deposit
            setWholeMoney(Memo.activeUser.balance)

            const record = {
                datetime: new Date().toISOString().substring(0, 10),
                user: Memo.activeUser.name,
                action: 'deposit',
                amount: deposit,
                balance: Memo.activeUser.balance,
                email: Memo.activeUser.email,
                uid: Memo.activeUser.uid
            }
            Memo.records.push(record)
        } else {
            toast('You must log in', false)
        }

        toast('Deposit received successfully', true)
        setShow(false)
    }

    const disableButton = (inputValue) => {
        if (inputValue === '') {
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
            header='Deposit'
            status={status}
            body={show ? (
                <>
                    <div>{Memo.activeUser ? wholeMoney : 'There is no user logged in'}</div>
                    <input className="form-control" placeholder="Deposit's amount" onChange={(e) => {
                        setDeposit(parseFloat(e.target.value))
                        disableButton(e.target.value)
                    }}></input>
                    <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{errorMessage}</div>
                    <button className="btn btn-light" onClick={depositFn} disabled={disabled}>Deposit</button>
                </>
            ) : (
                <>
                    <h5>Your deposit has been received</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>New Deposit</button>
                </>
            )}
        />
    );
}

export default Deposit