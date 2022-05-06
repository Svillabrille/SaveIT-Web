import React from 'react';
import { useState, useEffect } from 'react';
import './ProductBox.scss'

const ProductBox = ({id, name, addFood, price, quantity,supermarket}) => {

    const [qty, setQty] = useState(quantity)

    const handleSubmit = () => {
  
        if (qty <= 0) return
    
        const product = { id, name, quantity: Number(qty),price: Number(price) }

        addFood(product)
        setQty(0)
      }



    return (
        <>
              <div className="card">
                    <h1>{name}</h1>
                    <h3>{supermarket}</h3>
                    <p className='ProductPrice'>Price: {price} USD</p>
                    <div className='ProductQty'>
                        <button onClick={() => setQty(qty > 0 && qty - 1)}>
                            <i className="fas fa-minus-circle"></i>
                        </button>
                        <input
                            onChange={(event) => setQty(event.target.value)}
                            className="input"
                            type="number"
                            min="0"
                            value={qty}
                        />
                        <button onClick={() => setQty(qty + 1) }>
                            <i className="fas fa-plus-circle"></i>
                        </button>
                        
                    </div>
                    <div>
                        <button className='ProductButton' onClick={handleSubmit} >
                            Add to shopping List
                        </button>
                    </div>
            </div>
        </>
    );
};

export default ProductBox;