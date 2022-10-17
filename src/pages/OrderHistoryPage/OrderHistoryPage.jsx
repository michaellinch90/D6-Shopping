import './OrderHistoryPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';
import CartDetail from '../../components/CartDetail/CartDetail';
import LogoSmall from '../../components/LogoSmall/LogoSmall';

export default function OrderHistoryPage({ user, setUser }) {
  /*--- State --- */
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  /*--- Side Effects --- */
  useEffect(function () {
    // Load previous orders (paid)
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory();
      setOrders(orders);
      // If no orders, activeOrder will be set to null below
      setActiveOrder(orders[0] || null);
    }
    fetchOrderHistory();
  }, []);

  /*--- Event Handlers --- */
  function handleSelectOrder(order) {
    setActiveOrder(order);
  }

  /*--- Rendered UI --- */
  return (
    <main className="OrderHistoryPage">
      <aside>
        <LogoSmall />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
      </aside>
      <PreviousOrder
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <CartDetail
        order={activeOrder}
      />
    </main>
  );
}