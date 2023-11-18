import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductItem from "./pages/ProductItem";
import CartItem from "./pages/CartItem";
import Login from "./pages/Login"; 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'false';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      <div className="mainContent">
        {!isLoggedIn && (
          <div className="btnAction">
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        )}
        <Routes>
          <Route path="/" element={
            <>
              <div className="dashboard">
                <div className="card">
                  <div className="cardTop">
                    <img
                      alt="Logo"
                      src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
                    />
                  </div>
                  <div className="cardTitle">Our Products</div>
                  <div className="cardBody">
                    <ProductItem />
                    <ProductItem />
                  </div>
                </div>

                <div className="card">
                  <CartItem />
                </div>
              </div>
            </>
          } />
          <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
