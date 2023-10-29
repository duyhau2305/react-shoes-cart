
import React from 'react';
import { useDispatch } from 'react-redux';
// var randomColor = require('randomcolor'); // ese5\
import randomColor from 'randomcolor'; // es6

import Image from "../components/Image";
import Button from "../components/Button";

// actions
import { addToCart } from '../redux/app.slice';

function ProductItem() {
  const [products, setProducts] = React.useState([]);
  //  hooks
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(json => json.json())
      .then(data => setProducts(data))
  }, [])

  function handleAddToCart(productItem) {
    dispatch(addToCart(productItem));
  }

  return (
    <>
      {products.map(product => (
        <div key={product.id} className="shopItem">
          <Image
            className="shopItem_image"
            src={product.image}
            bgColor={randomColor({
              luminosity: 'random',
              hue: 'random'
            })}
          />
          <div className="shopItem_name">{product.title}</div>
          <div className="shopItem_description">
            {product.description}
          </div>
          <div className="shopItem_bottom">
            <div className="shopItem_price">${product.price}</div>
            <Button 
              buttonText="ADD TO CART"
              className="shopItem_button"
              onClick={() => handleAddToCart(product)}
            /> 
          </div>
        </div>
      ))}
    </>
    
  );
}

export default ProductItem;
