import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api'
import * as orderAPI from '../../utilities/orders.api'
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import OrderList from '../../components/OrderList/OrderList';
import CategoryList from '../../components/CategoryList/CategoryList';
import CartDetail from '../../components/CartDetail/CartDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewOrderPage({ user, setUser }) {
  const [orderItems, setOrderItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  

  
  // useEffect(function() {
  //   console.log('useEffect runs only after first render');
  // }, [listItems]);

  useEffect(function(){
    async function getItems(){
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat]
      }, []);
      setOrderItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    async function getCart() {
      const cart = await orderAPI.getCart();
      setCart(cart)
    }
    getCart();
  }, []);

  return (
    <main className='NewOrderPage'>
      <aside>
        <Logo />
        <CategoryList 
        categories = {categoriesRef.current}
        activeCat = {activeCat}
        setActiveCat = {setActiveCat}
        />
        <Link to = '/orders' className='button-sm'>PREVIOUS ORDERS</Link>
        <UserLogOut 
        user={user}
        setUser = {setUser}
        />
      </aside>
      <OrderList 
      orderItems = {orderItems.filter(item => item.category.name === activeCat)}
      />
      <CartDetail />
    </main>
    
  );
}


