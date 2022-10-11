import './OrderListItem';

export default function OrderListItem({ orderItem }) {
    return (
        <div className='OrderListItem'>
            <div className='picture flex-ctr-ctr'>{orderItem.picture}</div>
            <div className='name'>{orderItem.name}</div>
            <div className='buy'>
                <span>${orderItem.price.toFixed(2)}</span>
                <button className='btn-sm' onClick={() => console.log('clicked')}>Add</button>
            </div>
        </div>
    );
}