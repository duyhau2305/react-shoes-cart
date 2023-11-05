import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import randomColor from 'randomcolor';

import Image from "../components/Image";
import Button from "../components/Button";
import { addToCart, fetchProductsAsync } from '../redux/app.slice';

function ProductItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.app.carts); // This will get the cart items from the state
  const products = useSelector(state => state.app.products); // This will get the cart items from the state

  React.useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    //   .catch(error => {
    //     console.error('Error fetching products:', error);
    //   });
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  function handleAddToCart(productItem) {    
    console.log('handleAddToCart', productItem)
    if (!cartItems.some(item => item.id === productItem.id)) {
      dispatch(addToCart(productItem));
    }
  }

  return (
    <>
      {products.map(product => {
        // Check if the product is currently in the cart
        const isProductInCart = cartItems.some(item => item.id === product.id);

        return (
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
            <div className="shopItem_description">{product.description}</div>
            <div className="shopItem_bottom">
              <div className="shopItem_price">${product.price}</div>
              <Button 
                buttonText="ADD TO CART"
                className={`shopItem_button ${isProductInCart ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={isProductInCart} // Disable button if product is in cart
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductItem;
