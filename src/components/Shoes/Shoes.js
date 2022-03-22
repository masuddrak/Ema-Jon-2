import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import './Shoes.css'

const Shoes = () => {
    const [products,setProducts]=useState([]);
    console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='Shoes'>
            <div className="items">
                {
                    products.map(product=><Items 
                        product={product}
                        key={product.id}
                        ></Items>)
                }
            </div>
            <div className="summary">
                <h2>Summary List</h2>
            </div>
        </div>
    );
};

export default Shoes;