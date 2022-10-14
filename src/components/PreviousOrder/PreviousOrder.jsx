import './PreviousOrder.css'
import PreviousOrderItem from '../PreviousOrderItem/PreviousOrderItem'

export default function PreviousOrder({orders, activeOrder, handleSelectOrder}){
    const orderItems = orders.map(item =>
        <PreviousOrderItem
        order={item}
        isSelected={item === activeOrder}
        handleSelectOrder={handleSelectOrder}
        key={item._id}
        />
        )
        
    return (
        <main className='PreviousOrder'>
            {orderItems.length ?
            orderItems
            :
            <span className='no-orders'>NO PREVIOUS ORDERS</span>
            }
        </main>
    );
};