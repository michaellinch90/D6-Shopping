import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem'

export default function OrderList({ orderItems }) {
    const items = orderItems.map(item =>
        <OrderListItem 
        key = {item._id}
        orderItem={item}
        />
        );
    return (
        <main className='OrderList'>
            {items}
        </main>
    );    
}