import React from 'react'
import { Fn } from '../App.js';
import {Card, UserContext} from "../context/context.jsx"
import toast from './toast.js'

function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nameMessage, setNameMessage] = React.useState('');
    const [emailMessage, setEmailMessage] = React.useState('');
    const [passwordMessage, setPasswordMessage] = React.useState('');
    const [disabled, setDisabled] = React.useState(true)
    const ctx = React.useContext(UserContext);
  
    function handleCreate() {
      if (name === '' && email === '' && password === '') {
        setNameMessage('*Field is required')
        setEmailMessage('*Field is required')
        setPasswordMessage('*Field is required')
        return;
      } else {
        setNameMessage('')
        setEmailMessage('')
        setPasswordMessage('')
      }
      if (name === '') {
        setNameMessage('*Field is required')
      } else {
        setNameMessage('')
      }
      if (email === '') {
        setEmailMessage('*Field is required')
      } else {
        setEmailMessage('')
      }
      if (password === '') {
        setPasswordMessage('*Field is required')
        return;
      } else {
        setPasswordMessage('')
      }
      if (password.length < 8) {
        setPasswordMessage('*Your password must contain more than 8 digits')
        return;
      } else {
        setPasswordMessage('')
      }
  
      ctx.users.push({ name, email, password, uid: Fn.uuidv4(), balance: 100 });
      toast('Account created successfully', true)  
      setShow(false);
    }
  
    function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      setDisabled(true)
    }
  
    const disableButton = (accountName, accountEmail, accountPassword) => {
      if (accountName === '' && accountEmail === '' && accountPassword === '') {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }
  
    return (
      <Card
        height="30rem"
        width="30rem"
        bgcolor="light"
        txtcolor="black"
        header="Create Account"
        status={status}
        body={show ? (
          <>
            <input type="input" className="form-control" id="name" placeholder="Name" value={name} onChange={e => {
              setName(e.currentTarget.value)
              disableButton(e.currentTarget.value, email, password)
            }} />
            <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{nameMessage}</div>
            <input type="input" className="form-control" id="email" placeholder="Email" value={email} onChange={e => {
              setEmail(e.currentTarget.value)
              disableButton(name, e.currentTarget.value, password)
            }} />
            <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{emailMessage}</div>
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={e => {
              setPassword(e.currentTarget.value)
              disableButton(name, email, e.currentTarget.value)
            }} />
            <div style={{ width: '100%', marginLeft: '10px', color: 'red' }}>{passwordMessage}</div>
            <button type="submit" className="btn btn-light cabutton" onClick={handleCreate} disabled={disabled}>Create Account</button>
          </>
        ) : (
          <>
            <button type="submit" className="btn btn-light cabutton" onClick={clearForm}>Add another account</button>
          </>
        )}
      />
    )
  }

  export default CreateAccount