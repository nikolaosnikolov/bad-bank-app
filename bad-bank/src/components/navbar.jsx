import React from 'react'
import { Memo } from "../App.js";
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <>
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
          <a style={{
            right: '0',
            position: 'absolute',
            fontSize: '1.1rem',
          }} className="nav-link" href="#/login/">Login</a>
          <a style={{
            right: '50px',
            position: 'absolute',
            fontSize: '1.1rem',
          }} className="nav-link" href="#/" onClick={() => {
            Memo.activeUser && delete Memo.activeUser
          }}>Logout</a>
        </div>
      </nav>
    </>
  );
}

export default NavBar








































// $(document).ready(function () {
//   $("ul.navbar-nav > li").click(function (e) {
//     $("ul.navbar-nav > li").removeClass("active");
//     $(this).addClass("active");
//   });
// });







// function NavBar() {
//   const [clicked, setClicked] = React.useState('')
//   const [isHoming, setIsHoming] = React.useState(false)
//   const [isCreatingaccount, setIsCreatingaccount] = React.useState(false)
//   const [isDepositing, setIsDepositing] = React.useState(false)
//   const [isWithdrawing, setIsWithdrawing] = React.useState(false)
//   const [isAlldata, setIsAlldata] = React.useState(false)

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand">BadBank</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li style={{ position: "relative" }} className="nav-item active">
//               <a id="home-nav" className="nav-link" href="#/" onMouseOver={() => {setIsHoming(true)}} onMouseOut={() => {setIsHoming(false)}} onClick={(e) => {
//                 clicked != '' && (
//                   clicked.style.color = 'rgba(0, 0, 0, .6)',
//                   clicked.style.fontWeight = 'normal'
//                 )
//                 setClicked(e.target)
//                 e.target.style.color = 'white'
//                 e.target.style.fontWeight = '600'
//               }}>Home</a>
//               {isHoming && <div style={{ position: "absolute", top: '3rem', left: '0', border: '2px solid black', borderRadius: '5px', padding: '0.6rem', fontSize: '1rem' }}>The Home page</div>}
//             </li>
//             <li className="nav-item">
//               <a id="createaccount-nav" className="nav-link" href="#/CreateAccount/" onMouseOver={() => {setIsCreatingaccount(true)}} onMouseOut={() => {setIsCreatingaccount(false)}} onClick={(e) => {
//                 clicked != '' && (
//                   clicked.style.color = 'rgba(0, 0, 0, .6)',
//                   clicked.style.fontWeight = 'normal'
//                 )
//                 setClicked(e.target)
//                 e.target.style.color = 'white'
//                 e.target.style.fontWeight = '600'
//               }}>Create Account</a>
//               {isCreatingaccount && <div style={{ position: "absolute", top: '4rem', left: '11rem', border: '2px solid black', borderRadius: '5px', padding: '0.6rem', fontSize: '1rem' }}>Create your account</div>}

//             </li>
//             <li className="nav-item">
//               <a id="deposit-nav" className="nav-link" href="#/deposit/" onMouseOver={() => {setIsDepositing(true)}} onMouseOut={() => {setIsDepositing(false)}} onClick={(e) => {
//                 clicked != '' && (
//                   clicked.style.color = 'rgba(0, 0, 0, .6)',
//                   clicked.style.fontWeight = 'normal'
//                 )
//                 setClicked(e.target)
//                 e.target.style.color = 'white'
//                 e.target.style.fontWeight = '600'
//               }}>Deposit</a>
//               {isDepositing && <div style={{ position: "absolute", top: '4rem', left: '19rem', border: '2px solid black', borderRadius: '5px', padding: '0.6rem', fontSize: '1rem' }}>Deposit money</div>}

//             </li>
//             <li className="nav-item">
//               <a id="withdraw-nav" className="nav-link" href="#/withdraw/" onMouseOver={() => {setIsWithdrawing(true)}} onMouseOut={() => {setIsWithdrawing(false)}} onClick={(e) => {
//                 clicked != '' && (
//                   clicked.style.color = 'rgba(0, 0, 0, .6)',
//                   clicked.style.fontWeight = 'normal'
//                 )
//                 setClicked(e.target)
//                 e.target.style.color = 'white'
//                 e.target.style.fontWeight = '600'
//               }}>Withdraw</a>
//               {isWithdrawing && <div style={{ position: "absolute", top: '4rem', left: '23rem', border: '2px solid black', borderRadius: '5px', padding: '0.6rem', fontSize: '1rem' }}>Withdraw money</div>}

//             </li>
//             <li className="nav-item">
//               <a id="alldata-nav" className="nav-link" href="#/alldata/" onMouseOver={() => {setIsAlldata(true)}} onMouseOut={() => {setIsAlldata(false)}} onClick={(e) => {
//                 clicked != '' && (
//                   clicked.style.color = 'rgba(0, 0, 0, .6)',
//                   clicked.style.fontWeight = 'normal'
//                 )
//                 setClicked(e.target)
//                 e.target.style.color = 'white'
//                 e.target.style.fontWeight = '600'
//               }}>AllData</a>
//               {isAlldata && <div style={{ position: "absolute", top: '4rem', left: '28rem', border: '2px solid black', borderRadius: '5px', padding: '0.6rem', fontSize: '1rem', zIndex: '10' }}>See your submissions</div>}

//             </li>
//           </ul>
//           <a style={{
//             right: '0',
//             position: 'absolute',
//             fontSize: '1.1rem',
//           }} className="nav-link" href="#/login/">Login</a>
//           <a style={{
//             right: '50px',
//             position: 'absolute',
//             fontSize: '1.1rem',
//           }} className="nav-link" href="#/" onClick={() => {
//             Memo.activeUser && delete Memo.activeUser
//           }}>Logout</a>
//         </div>
//       </nav>
//     </>
//   );
// }