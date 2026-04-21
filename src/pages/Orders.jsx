import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="orders-page">
            {state.orders.map(order => (
                <div key={order.orderId} data-testid="order-item" className="card">
                    <h3>{order.restaurant}</h3>
                    <p>Customer: {order.customerName}</p>
                    <Link to={`/orders/${order.orderId}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};