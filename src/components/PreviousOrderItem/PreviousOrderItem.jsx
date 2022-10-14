import './PreviousOrderItem.css'

export default function PreviousOrderItem({ order, isSelected, handleSelectOrder }) {
    return (
        <div className={`PreviousOrderItem${isSelected ? ' selected' : ''}`} onClick={() => handleSelectOrder(order)}>
            <div>
                <div>Order Id: <span className='smaller'>{order.orderId}</span></div>
                <div className='smaller'>{new Date(order.updatedAt).toLocaleDateString()}</div>
            </div>
            <div className="align-rt">
                <div>${order.orderTotal.toFixed(2)}</div>
                <div className="smaller">{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
            </div>
        </div>
    );
}