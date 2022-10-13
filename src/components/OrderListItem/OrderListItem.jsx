import './OrderListItem.css';

export default function OrderListItem({ item, handleAddToOrder }) {
    return (
        <div className='OrderListItem'>
            <div className='picture flex-ctr-ctr'>{item.picture}</div>
            <div className='name'>{item.name}</div>
            <div className='buy'>
                <span>${item.price.toFixed(2)}</span>
                <button className='btn-sm' onClick={() => handleAddToOrder(item._id)}>Add</button>
            </div>
        </div>
    );
}