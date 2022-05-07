import React from 'react';
import { useState } from 'react';
import ProductBox from '../../components/ProductBox/ProductBox';
import Searcher from '../../components/Searcher/Searcher';
import ShoppingList from '../../components/ShoppingList/ShoppingList';
import './NewShoppingList.scss'
import data from '../../data/data.json'




const NewShoppingList = () => {

    const [products, setProducts] = useState(data)
    const [showForm, setShowForm] = useState(false)
    const [search, setSearch] = useState("")
    const [shoppingList, setShoppingList] = useState([])
  
    const deleteProduct = (id) => setShoppingList(shoppingList.filter(food => food.id !== id))
  
    const onSubmit = (product) => setProducts([product, ...product])
  
    const addFood = (food) => {
      const productIndex = shoppingList.findIndex(el => el.id === food.id)
  
      if (productIndex > -1) {
        let newShoppingList = [...shoppingList]
        newShoppingList[productIndex].quantity = newShoppingList[productIndex].quantity + food.quantity
        setShoppingList(newShoppingList)
      } else  {
        setShoppingList([...shoppingList, food])
      }
    }

    return (
        <div className='ShoppingList'>
            <Searcher setSearch={setSearch}></Searcher>
             <div className="column">
                { search && products?.sort((a, b) => a.price - b.price).map(product => {
                        if (product?.name.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <div key={product.id}>
                                <ProductBox addFood={addFood} {...product} />
                            </div>
                        )
                        }
                    return null
                })}
            </div>
            <ShoppingList deleteProduct={deleteProduct} shoppingList={shoppingList}></ShoppingList>
        </div>
    );
};

export default NewShoppingList;