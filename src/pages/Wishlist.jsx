import React, { useEffect } from 'react'

function Wishlist() {
  const [wishlistitems, setwishlistItems] = React.useState([])
  useEffect(() => {
    const product = localStorage.getItem("wishlistItem");
    setwishlistItems(JSON.parse(product));
  }, [])
  return (
    <div>
      {
        wishlistitems?.map((e, i) => {
          return <div key={i} className='cartItemCalss'>
            <img src={e.image} width={200} height={200} />
            <div style={{ marginLeft: "10px" }}>
              <p>
                {e.title}
              </p>
              <p>{e.price}</p>  <button> Delete</button>
            </div>
          </div>
        })

      }
    </div>
  )
}

export default Wishlist