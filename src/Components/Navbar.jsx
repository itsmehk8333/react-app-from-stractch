import React from 'react';
import "./Navbar.css";
// import cartImage from "../Utilities/Images/cart.png";
// import wishlistIcon from "../Utilities/Images/wishlist.png"

function Navbar({ setAppLocation }) {
  return (
    <div>
      <div className='navbarContainer'>
        <h3 onClick={() => {
          if (window.location.pathname != "/") {
            window.history.pushState(null, null, "/")
            setAppLocation("/")
          }
        }} style={{ cursor: "pointer" }}>
          Shopify
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => {
              if (window.location.pathname != "/wishlist") {
                window.history.pushState(null, null, "/wishlist")
                setAppLocation("/wishlist")
              }
            }}
            style={{
              marginRight: "20px",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            Wish List
          </button>


          <button
            onClick={() => {
              if (window.location.pathname != "/cart") {
                window.history.pushState(null, null, "/cart")
                setAppLocation("/cart")
              }
            }}
            style={{
              marginRight: "20px",

              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            Cart
          </button>

          {/* <img src={wishlistIcon} width={25} height={25} className='wishListImage'
            onClick={() => {
              if (window.location.pathname != "/wishlist") {
                window.history.pushState(null, null, "/wishlist")
                setAppLocation("/wishlist")
              }
            }}
          />
          <img src={cartImage} width={30} height={30} className='cartImage'
           onClick={() => {
            if (window.location.pathname != "/cart") {
              window.history.pushState(null, null, "/cart")
              setAppLocation("/cart")
            }
          }}
           /> */}

        </div>
      </div>


    </div>
  )
}

export default Navbar