import React from 'react';
import { useState } from 'react';
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
                    <h1 className='ProductName'>{name}</h1>
                    <h3 className='Supermarket'>{supermarket}</h3>
                    <p className='ProductPrice'>Price: {price} USD</p>
                    <div className='ProductQty'>
                            <i onClick={() => setQty(qty > 0 && qty - 1)} className="fas fa-minus-circle fa-4x"></i>
                        <input
                            onChange={(event) => setQty(event.target.value)}
                            className="input"
                            type="number"
                            min="0"
                            value={qty}
                        />
                            <i onClick={() => setQty(Number(qty) + 1) } className="fas fa-plus-circle fa-4x"></i>
                        
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