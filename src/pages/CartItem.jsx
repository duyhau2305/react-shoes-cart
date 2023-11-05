
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/app.slice";

import Button from "../components/Button";
import Image from "../components/Image";

function CartItem() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.app.carts);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); 
  };

  console.log('carts', carts);

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
        <span className="card_amount">$89.97</span>
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
                  <div className="cartItem_button">-</div>
                  <div className="cartItem_number">1</div>
                  <div className="cartItem_button">+</div>
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
