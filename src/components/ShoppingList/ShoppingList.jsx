import React from 'react';

const ShoppingList = ({deleteProduct, shoppingList}) => {

    const calculateTotalPrice = () => {
        return shoppingList.reduce((acc, shoppingList) => {
          acc += (shoppingList.price * shoppingList.quantity)
          return acc
        }, 0)
      }

    return (
        <div>
            <div className="content box">
                <ul>
                {shoppingList.map(product => {
                    return (
                    <li key={product.id} className="has-text-left">
                        {product.quantity} {product.name} = {product.price * product.quantity} 
                        <i
                        className="fas fa-times has-text-danger is-clickable ml-3"
                        onClick={() => deleteProduct(product.id)}
                        ></i>
                    </li>
                    )
                })}
                </ul>
                <div>
                <h2 className="subtitle">Total price = {calculateTotalPrice()} USD</h2>
                </div>
            </div>
        </div>
    );
};

export default ShoppingList;