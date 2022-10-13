// import './OrderHistoryPage.css'
// import { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
// import * as ordersAPI from '../../utilities/orders-api';
// import Logo from '../../components/Logo/Logo';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
// import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';
// import CartDetail from '../../components/CartDetail'
// import {checkToken} from '../../utilities/users-service';


// export default function OrderHistoryPage() {
//   //state
//   const [orders, setOrders] = useState([]);
//   const [activeOrder, setActiveOrder] = useState(null);

//   //Side Effects
//   useEffect(function () {
//     //load previous paid orders
//     async function fetchOrderHistory() {
//       const orders = await ordersAPI.getOrderHistory();
//       setOrders(orders);
//       //if no order, activeOrrder will be set to null
//       setActiveOrder(orders[0] || null);
//     } 
//     fetchOrderHistory();
//   }, []);

//   //Event Handlers
//   function handleSelectOrder(order) {
//     setActiveOrder(order)
//   }

//   //Rendered UI
//   return (
//     <>
//       <h1>ListHistoryPage</h1>
//       <button onClick={handleCheckToken}>Check When My Login Expires</button>
//     </>
//   );
// }
import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage() {

  async function handleCheckToken() {
    // Promise will resolve to a Date object
    const expDate = await usersService.checkToken();
    console.log(new Date(expDate));
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}

