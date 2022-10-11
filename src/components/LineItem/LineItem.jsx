import './LineItem.css'

export default function LineItem({ lineItem, isPaid }){
    return(
        <div className='LineItem'>
            <div className='flex-ctr-ctr'>{lineItem.item.picture}</div>
            <div className='flex-ctr-ctr'>
                <span className='align-ctr'>{lineItem.item.name}</span>
                <span>{lineItem.item.price.toFixed(2)}</span>
            </div>
            <div className='qty' style={{ justifyContent: isPaid && 'center' }}>
                {!isPaid &&
                    <button 
                        className='btn-xs'
                        onClick={() => alert('clicked')}
                    >-</button>
                }
                {!isPaid &&
                    <button 
                        className='btn-xs'
                        onClick={() => alert('clicked')}
                    >+</button>
                }
            </div>
            <div className='ext-price'> ${lineItem.extPrice.toFixed(2)}</div>
        </div>
    );
}