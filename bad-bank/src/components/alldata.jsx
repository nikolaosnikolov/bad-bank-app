import { Memo, Fn } from "../App.js";
import React from 'react'
import { Card } from "../context/context.jsx";

function AllData() {

    const records = Memo.records.filter(item => item.uid === Memo.activeUser.uid)
  
    const allDataReport = records.map(item => {
      const { datetime, user, action, amount } = item
      return (
      <tr key={Fn.uuidv4()}>
        <th>{datetime}</th>
        <th>{user}</th>
        <th>{action}</th>
        <th>{amount}</th>
      </tr>
      )
    })
  
    return (
      <>
      <Card
      width="40rem"
      header="Your submissions"
      txtcolor="black"
      body={(
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">User</th>
                <th scope="col">Action</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>{allDataReport}</tbody>
          </table>
      )}
      />
      </>
    );
  }

  export default AllData