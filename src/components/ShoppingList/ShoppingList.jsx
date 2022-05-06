import React from 'react';
import './ShoppingList.scss'
import { Link } from 'react-router-dom';

const ShoppingList = ({deleteProduct, shoppingList}) => {

    const calculateTotalPrice = () => {
        return shoppingList.reduce((acc, shoppingList) => {
          acc += (shoppingList.price * shoppingList.quantity)
          return acc
        }, 0)
      }

    return (
        <div className='ContentBox'>
            <div className="">
                <ul>
                {shoppingList.map(product => {
                    return (
                    <li key={product.id} className="has-text-left">
                        {product.quantity} {product.name} = {product.price * product.quantity.toFixed(2)} 
                        <i
                        className="fas fa-times has-text-danger is-clickable ml-3 fa-lg"
                        onClick={() => deleteProduct(product.id)}
                        ></i>
                    </li>
                    )
                })}
                </ul>
                <div>
                    <h2 className="subtitle">
                        Total price = {calculateTotalPrice().toFixed(2)} USD
                    </h2>
                </div>
                <div>
                    <Link to={{
                        pathname:'/shopping-payment',
                        calculateTotalPrice:{calculateTotalPrice}
                    }} >
                        <p>Proceed to Payment</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;