import './OrderListItem';

export default function OrderListItem({ orderItem, handleAddToOrder }) {
    return (
        <div className='OrderListItem'>
            {/* <div className='picture flex-ctr-ctr'>{orderItem.picture}</div> */}
            <div className='name'>{orderItem.name}</div>
            <div className='buy'>
                <span>${orderItem.price.toFixed(2)}</span>
                <button className='btn-sm' onClick={() => handleAddToOrder(orderItem._id)}>Add</button>
            </div>
        </div>
    );
}