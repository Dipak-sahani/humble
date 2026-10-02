import React from 'react';

const ItemsCard = ({product}) => {
    return (
        <div className=' w-100  bg-gray-300 p-4 rounded-sm hover:bg-gray-400 '>
            <h1>Title: {product.title}</h1>
            <h1>catagory: {product.catagory}</h1>
            <h1>price: {product.price}</h1>
        </div>
    );
}

export default ItemsCard;
