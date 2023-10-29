import React from "react";


function ProductItem() {
  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: "rgb(212, 215, 214)" }}
      >
        <img
          alt=""
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
        />
      </div>
      <div className="shopItem_name">Nike Air Zoom Pegasus 36</div>
      <div className="shopItem_description">
        The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that
        targets breathability across high-heat areas. A slimmer heel collar and
        tongue reduce bulk, while exposed cables give you a snug fit at higher
        speeds.
      </div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">$108.97</div>
        <div className="shopItem_button">
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
