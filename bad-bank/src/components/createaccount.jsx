import React from 'react'
import { Fn } from '../App.js';
import {Card, UserContext} from "../context/context.jsx"

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
    const body = document.body
  
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
  
      modal(body, 'Account message', 'Your account has been created successfuly!')
  
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
        bgcolor="primary"
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
            <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled}>Create Account</button>
          </>
        ) : (
          <>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
          </>
        )}
      />
    )
  }
  
  const modal = (appendElement, titleContent, texting) => {
    const myModal = document.createElement('div')
    const main = document.createElement('div')
    const background = document.createElement('div')
    const wrapper = document.createElement('div')
    const title = document.createElement('div')
    const content = document.createElement('div')
    const college = document.createElement('div')
    const collegeIcon = document.createElement('div')
    const collegeImage = document.createElement('img')
    const collegeInfo = document.createElement('div')
  
    const close = document.createElement('img')
  
    background.setAttribute('id', 'modalBackground')
    wrapper.setAttribute('id', 'modalWrapper')
    title.setAttribute('id', 'modalTitle')
    content.setAttribute('id', 'modalContent')
    close.setAttribute('id', 'modalClose')
    college.setAttribute('id', 'college')
    collegeIcon.setAttribute('id', 'collegeIcon')
    collegeInfo.setAttribute('id', 'collegeInfo')
    collegeImage.setAttribute('id', 'collegeImage')
  
    title.textContent = titleContent
    collegeInfo.textContent = texting
    close.src = './images/x.png'
    // collegeImage.src = <svg xmlns="http://www.w3.org/2000/svg"><path d="M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
  
    close.onclick = () => {
        myModal.style.setProperty('display', 'none')
    }
   
    collegeIcon.appendChild(collegeImage)
    college.appendChild(collegeIcon)
    college.appendChild(collegeInfo)
    content.appendChild(college)
    wrapper.appendChild(title)
    wrapper.appendChild(content)
    wrapper.appendChild(close)
    background.appendChild(wrapper)
    main.appendChild(background)
    myModal.appendChild(main)
    appendElement.appendChild(myModal)
  }

  export default CreateAccount