import ProductItem from "./pages/ProductItem";
import CartItem from "./pages/CartItem";

function App() {

  return (
    <div className="mainContent">
      <div className="btnAction">
        <button type="button">Login</button>
      </div>
      <div className="dashboard">
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
          <CartItem />
        </div>
      </div>

    </div>
  );
}

export default App;
