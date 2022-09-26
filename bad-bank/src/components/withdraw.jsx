import React from 'react'
import { Memo } from "../App.js";
import { Card } from "../context/context.jsx"
import toast from './toast.js';

function Withdraw() {
  const [show, setShow] = React.useState(true)
  const [withdraw, setWithdraw] = React.useState(0);
  const [status] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)
  const [wholeMoney, setWholeMoney] = React.useState(Memo.activeUser ? Memo.activeUser.balance : 0);

  const withdrawFn = () => {
    if (isNaN(withdraw)) {
      toString(withdraw)
      setErrorMessage('*Withdraw value must be a number')
      return;
    }
    if (withdraw < 0) {
      setErrorMessage('*Withdraw value must be a positive number')
      return;
    }

    if (withdraw > Memo.activeUser.balance) {
      setErrorMessage('*Withdraw value must be less than your total deposits')
      return;
    }
    if (Memo.activeUser) {
      setErrorMessage('')
      Memo.activeUser.balance -= withdraw
      setWholeMoney(Memo.activeUser.balance)

      const record = {
        datetime: new Date().toISOString().substring(0, 10),
        user: Memo.activeUser.name,
        action: 'withdraw',
        amount: withdraw,
        balance: Memo.activeUser.balance,
        email: Memo.activeUser.email,
        uid: Memo.activeUser.uid
      }
      Memo.records.push(record)
    } else {
      toast('You must log in', false)
    }

    toast('Withdraw received successfully', true)
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
      header='Withdraw'
      status={status}
      body={show ? (
        <>
          <div>{Memo.activeUser ? `Your actual amount is $${wholeMoney}` : 'There is no user logged in'}</div>
          <input className="form-control" placeholder="Withdraw's amount" onChange={(e) => {
            setWithdraw(parseFloat(e.target.value))
            disableButton(e.target.value)
          }}></input>
          <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{errorMessage}</div>
          <button className="btn btn-light" onClick={withdrawFn} disabled={disabled}>Withdraw</button>
        </>
      ) : (
        <>
          <h5>You withdrawed money with success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>New Withdraw</button>
        </>
      )}
    />
  );
}

export default Withdraw