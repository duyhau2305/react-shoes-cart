import React from "react";
import ProductItem from "./pages/ProductItem";
import CartItem from "./pages/CartItem";


function App() {
  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <div className="cardTitle">Our Products</div>

        <div className="cardBody">
          <ProductItem />
          <ProductItem />
        </div>
      </div>

      {/* cart */}
      <div className="card">
        <div className="cardTop">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
          <div>Total: 10</div>
        </div>

        <div className="cardTitle">
          <span>Your cart</span>
          <span className="card_amount">$89.97</span>
        </div>

        <div className="cardBody">
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default App;
