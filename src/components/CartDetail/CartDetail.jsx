import './CartDetail.css'
import LineItem from '../LineItem/LineItem'

//dispplays the details of any order 
//unpaid
export default function CartDetail({order, handleChangeQty, handleCheckout}) {

    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
        )

    return (
        <div className='CartDetail'>
            <div className='section-heading'>
                {order.isPaid ?
                    <span> Order <span className='smaller'>{order.orderId}</span></span>
                    :
                    <span> New Order </span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className='line-item-container flex-ctr-ctr flex-col scroll-y'>
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section className='total'>
                            {order.isPaid ? 
                            <span className='right'>&nbsp;&nbsp;</span>
                            :
                            <button
                                className='btn-sm'
                                onClick={handleCheckout}
                                disabled={!lineItems.length}
                            >
                             CHECKOUT   
                            </button>
                        }
                        <span> Total Qty: {order.totalQty} </span>
                        <span className='right'>Total: ${order.orderTotal.toFixed(2)} </span>
                        </section>
                    </>
                    :
                    <div className='ready'>Ready to Shop?</div>
                }
            </div>
        </div>
    );
}