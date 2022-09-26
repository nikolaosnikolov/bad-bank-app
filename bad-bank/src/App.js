import { BrowserRouter, NavLink, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import AllData from "./components/alldata.jsx"
import CreateAccount from "./components/createaccount.jsx"
import Deposit from "./components/deposit.jsx"
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"
import Withdraw from "./components/withdraw.jsx"
import { UserContext } from './context/context.jsx'

function App() {
  const appendTo = document.getElementById('body')
  const containerOfLoader = document.createElement('div')
  const spinner = document.createElement('div')
  const vh = document.createElement('span')

  spinner.setAttribute('class', 'spinner-border')
  spinner.setAttribute('role', 'status')
  vh.setAttribute('class', 'visually-hidden')
  containerOfLoader.setAttribute('id', 'containerOfLoader')

  containerOfLoader.style.setProperty('display', 'none')

  spinner.appendChild(vh)
  containerOfLoader.appendChild(spinner)

  return (
    <>
      <HashRouter>
        <UserContext.Provider value={Memo}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li style={{ position: "relative" }} className="nav-item active">
                  <NavLink id="home-nav" className={({ isActive }) => (isActive ? "link-active nav-link" : "link nav-link")} to="/home">Home<span className="tooltiptext">Home page</span></NavLink>
                </li>
                <li style={{ position: "relative" }} className="nav-item">
                  <NavLink id="createaccount-nav" className={({ isActive }) => (isActive ? "link-active nav-link" : "link nav-link")} to="/createaccount">Create Account<span className="tooltiptext">Create your account</span></NavLink>
                </li>
                <li style={{ position: "relative" }} className="nav-item">
                  <NavLink id="deposit-nav" className={({ isActive }) => (isActive ? "link-active nav-link" : "link nav-link")} to="/deposit">Deposit<span className="tooltiptext">Deposit money</span></NavLink>
                </li>
                <li style={{ position: "relative" }} className="nav-item">
                  <NavLink id="withdraw-nav" className={({ isActive }) => (isActive ? "link-active nav-link" : "link nav-link")} to="/withdraw">Withdraw<span className="tooltiptext">Withdraw money</span></NavLink>
                </li>
                <li style={{ position: "relative" }} className="nav-item">
                  <NavLink id="alldata-nav" className={({ isActive }) => (isActive ? "link-active nav-link" : "link nav-link")} to="/alldata">AllData<span className="tooltiptext">See your submissions</span></NavLink>
                </li>
              </ul>
              <NavLink style={{
                right: '0',
                position: 'absolute',
                fontSize: '1.1rem',
              }} className="nav-link" to="/login">Login</NavLink>
              <NavLink style={{
                right: '70px',
                position: 'absolute',
                fontSize: '1.1rem',
              }} className="nav-link" to="/login" onClick={() => {
                !Memo.activeUser
                  ? (() => { alert('There is no user logged in!') })()
                  : (() => {
                    containerOfLoader.style.removeProperty('display')
                    appendTo.appendChild(containerOfLoader)
                    document.getElementById('root').style.setProperty('display', 'none')
                    setTimeout(() => {
                      Memo.activeUser && delete Memo.activeUser
                      containerOfLoader.style.setProperty('display', 'none')
                      document.getElementById('root').style.removeProperty('display')
                    }, 2000)
                  })()
              }}>Logout</NavLink>
            </div>
          </nav>
          <div id="myContainer" className="container">
            <Routes>
              <Route path="/home" exact element={<Home />} />
              <Route path="/createaccount" element={<CreateAccount />} />
              <Route path="/login" element={<Login />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/alldata" element={<AllData />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

const Memo = {
  users: [],
  records: []
}

const Fn = {
  uuidv4: () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
}

export { App, Memo, Fn }