import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../redux/app.slice";

import Button from "../components/Button";
import Image from "../components/Image";

function CartItem() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.app.carts);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); 
  };

  console.log('carts', carts);
  const handleQuantity = (id, type) => {
    dispatch(changeQuantity({
      id,
      type
    }));
  };

  const total = React.useMemo(() => {
    if(carts.length === 0) return 0;
    
    const number = carts.reduce((acc, cart) => {
      return acc + cart.price * cart.quantity
    }, 0)
    return number.toFixed(3)
  }, [carts])

  return (
    <>
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: {carts.length}</div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${total}</span>
      </div>
      
       <div className="cardBody">
        {carts.map((cart) => (
          <div key={cart.id} className="cardItem">
            <div className="cardItem_left">
              <Image className="cardItem_image" src={cart.image} />
            </div>
            <div className="cardItem_right">
              <div className="cardItem_name">{cart.title}</div>
              <div className="cardItem_price">${cart.price}</div>
              <div className="cartItem_actions">
                <div className="cartItem_count">
                  <div className="cartItem_button" onClick={() => {
                    handleQuantity(cart.id, 'decrement')
                  }}>
                    -
                  </div>
                  <div className="cartItem_number">
                    {cart.quantity ||  1}
                  </div>
                  <div className="cartItem_button" onClick={() => {
                    handleQuantity(cart.id, 'increment')
                  }}>
                    +
                  </div>
                </div>
                <div className="carItem_remove">
                  <Button
                    icon="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    onClick={() => handleRemove(cart.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
       </div>
      
    </>
  );
}

export default CartItem;
