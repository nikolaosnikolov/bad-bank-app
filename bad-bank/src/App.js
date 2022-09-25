import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import AllData from "./components/alldata.jsx"
import CreateAccount from "./components/createaccount.jsx"
import Deposit from "./components/deposit.jsx"
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"
import Withdraw from "./components/withdraw.jsx"
import NavBar from "./components/navbar.jsx";
import { UserContext } from './context/context.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={Memo}>
          {/* <nav>
            <NavLink id="home-nav" className="nav-link" to="/">Home</NavLink>
            <NavLink id="createaccount-nav" className="nav-link" to="CreateAccount">Create Account</NavLink>
            <NavLink id="deposit-nav" className="nav-link" to="deposit">Deposit</NavLink>
            <NavLink id="withdraw-nav" className="nav-link" to="withdraw">Withdraw</NavLink>
            <NavLink id="alldata-nav" className="nav-link" to="alldata">AllData</NavLink>
          </nav> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li style={{ position: "relative" }} className="nav-item active">
              <NavLink id="home-nav" className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="createaccount-nav" className="nav-link" to="CreateAccount">Create Account</NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="deposit-nav" className="nav-link" to="deposit">Deposit</NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="withdraw-nav" className="nav-link" to="withdraw">Withdraw</NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="alldata-nav" className="nav-link" to="alldata">AllData</NavLink>
            </li>
          </ul>
          <NavLink style={{
            right: '0',
            position: 'absolute',
            fontSize: '1.1rem',
          }} className="nav-link" to="login">Login</NavLink>
          <NavLink style={{
            right: '50px',
            position: 'absolute',
            fontSize: '1.1rem',
          }} className="nav-link" to="/" onClick={() => {
            Memo.activeUser && delete Memo.activeUser
          }}>Logout</NavLink>
        </div>
      </nav>
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="login" element={<Login />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="alldata" element={<AllData />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

const Memo = {
  users: [
    // { uid: '2342-23423-23423-23', name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 },
    // { uid: '435-34534-345-3-3', name: 'venny', email: 'venny', password: 'venny', balance: 100 },
  ],
  records: [
    // { datetime: '2022-01-01T12:32:23Z0', uid: '435-34534-345-3-3', user: 'venny', action: 'deposit', amount: 333, balance: 433 }
  ]
}

const Fn = {
  uuidv4: () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
}

export { App, Memo, Fn }