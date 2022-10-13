import './'
import { useState } from 'react';
import {checkToken} from '../../utilities/users-service';


export default function OrderHistoryPage() {

  async function handleCheckToken() {
    // alert('clicked');
    const expDate = await checkToken();
    console.log(`expDate is ${expDate}`)
  }

  return (
    <>
      <h1>ListHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}


