import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem'

export default function OrderList({ orderItems, handleAddToOrder }) {
    const items = orderItems.map(item =>
        <OrderListItem 
        key = {item._id}
        orderItem={item}
        handleAddToOrder={handleAddToOrder}
        />
        );
    return (
        <main className='OrderList'>
            {items}
        </main>
    );    
}