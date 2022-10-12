import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import './NewOrderPage.css';
import { Link, useHistory} from 'react-router-dom';
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
  const history = useHistory();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      console.log(items)
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      console.log(items)
      setOrderItems(items);
      setActiveCat(items[0].category.name);
    }
    getItems();

    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  // Even Handlers

  async function handleAddToOrder(itemId){
    const cart= await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleChangeQty(itemId, newQty){
    const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(cart);
  }

  async function handleCheckout(){
    const cart = await ordersAPI.checkout();
    history.pushState('/orders')
  }

  return (
    <main className='NewOrderPage'>
      <aside>
        <Logo />
        <CategoryList 
        categories = {categoriesRef.current}
        activeCat = {activeCat}
        setActiveCat = {setActiveCat}
        />
        <Link to = '/orders' className='button btn-sm'>PREVIOUS ORDERS</Link>
        <UserLogOut 
        user={user}
        setUser = {setUser}
        />
      </aside>
      <OrderList 
      orderItems = {orderItems.filter(item => item.category.name === activeCat)}
      handleAddToOrder={handleAddToOrder}
      />
      <CartDetail 
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
    
  );
}


