import React from 'react';
import { useState } from 'react';
import './ProductBox.scss'

const ProductBox = ({id, name, description, quantity, addFood, price}) => {

    const [qty, setQty] = useState(quantity)

    const handleSubmit = () => {
        if (qty <= 0) return
    
        const product = { id, name, quantity: Number(qty), price: Number(price) }

        addFood(product)
        setQty(0)
      }

    return (
        <div>
              <div className="card">
                    <div className="title">{name}</div>
                    <div className="image">
                    <img
                        src="" alt='product'
                    />
                    </div>
                    <div className="text">
                        {description}
                    </div>
            
                    <button onClick={handleSubmit} >
                        Add to shopping List
                    </button>
            
            </div>
        </div>
    );
};

export default ProductBox;