import React, { useEffect, useState } from 'react';
import "../CSS/Cartpage.css"

function Cartpage() {

  const [cartitems, setCartItems] = useState([])
  useEffect(() => {
    const product = localStorage.getItem("cartItem");
    console.log(product)

    setCartItems(JSON.parse(product));
  }, [])
  return (
    <div >
      {
        cartitems?.map((e, i) => {
          return <div key={i} className='cartItemCalss'>
            <img src={e.image} width={200} height={200} />
            <div style={{ marginLeft: "40px" }}>
              <p>
                {e.title}
              </p>
              <p>{e.price}</p>  <button style={{ cursor: "pointer" }}> Delete</button>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Cartpage