import React, { useEffect, useState } from 'react'
import DashbaordPage from './pages/Dashboard.jsx'
import Navbar from './Components/Navbar.jsx';
// import DashbaordPage from './pages/Dashboard.jsx';
// import { useEffect, useState } from 'react';
import Cartpage from './pages/Cartpage.jsx';
import Wishlist from './pages/Wishlist.jsx';
import "./App.css"

function App() {

  const [appLocation, setAppLocation] = useState("/")

  useEffect(() => {

     console.log(16)
    var baseUrl = window.location.pathname;
    setAppLocation(baseUrl);
    console.log(appLocation)
    // localStorage.setItem("cartItem", JSON.stringify([]));
    // localStorage.getItem("wlItem", JSON.stringify([]));

    const cartExist = localStorage.getItem("cartItem")

    if(cartExist == undefined || cartExist == null){
      localStorage.setItem("cartItem" , JSON.stringify([]))
    }

    const wishlistItem = localStorage.getItem("wishlistItem")
    if(wishlistItem == undefined || wishlistItem == null){
      localStorage.setItem("wishlistItem" , JSON.stringify([]))
    }

    window.addEventListener("popstate", function () {
      if (appLocation == "/cart") {
        window.history.pushState({}, "", "/");
        setAppLocation("/")
      }
      else if (appLocation == "/wishlist") {
        window.history.pushState({}, "", "/");
        setAppLocation("/")
      }
    })
  }, [appLocation])
  return (
    <div style={{margin:"0px"}}>
      {
       
        appLocation == "/" ?
          <>
            <Navbar  {...{ setAppLocation }}/>
            <DashbaordPage {...{ setAppLocation }} />
          </> : appLocation == "/cart" ? <>
            <Navbar{...{ setAppLocation }} />
            <Cartpage />

          </> : appLocation == "/wishlist" ? <>
            <Navbar {...{ setAppLocation }}/>
            <Wishlist />
          </> :
            <>
              <Navbar {...{ setAppLocation }} />
              page not found</>
      }
    </div>
  )
}

export default App