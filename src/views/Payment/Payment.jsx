import React from 'react';
import './Payment.scss'

const Payment = ({calculateTotalPrice}) => {
    return (
        <div>
            Payment
            {calculateTotalPrice}
        </div>
    );
};

export default Payment;