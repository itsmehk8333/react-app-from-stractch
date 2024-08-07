import React, { useEffect, useState } from "react";
import "./Dashboard.css"


function DashbaordPage({ setAppLocation }) {
    const [productsData, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products",
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).then(data => data.json()).then(data => {
            
            if (data) {
                setData(data)
            }
        })
    }, [])
    return <div className="grid-container">
        {
            productsData.map((e, i) => {
                return <div className="grid-item" key={i}>
                    <div style={{ textAlign: "center" }}>
                        <img src={e.image} width={200} height={200} />
                    </div>
                    <h6>
                        {e.title}
                    </h6>
                    <p>
                        {e.price} / rs
                    </p>
                    <p>
                        rating:{e.rating.rate}
                    </p>
                    <button className="addCartBtn" onClick={() => {

                        var items = JSON.parse(localStorage.getItem("cartItem"));
                        items = [...items, e]
                        localStorage.setItem("cartItem", JSON.stringify(items))
                        setTimeout(() => {
                            window.history.pushState({}, "", "/cart");
                            setAppLocation("/cart")
                        }, 200)
                    }}>Add to Cart</button> <br />
                    <button className="addToWishlistBtn" onClick={() => {
                        var itemsOne = JSON.parse(localStorage.getItem("wishlistItem"));
                        if (itemsOne == null || itemsOne == undefined) {
                            itemsOne = [e]
                            localStorage.setItem("wishlistItem", JSON.stringify(itemsOne))
                        }
                        else {
                            itemsOne = [...itemsOne, e]
                            localStorage.setItem("wishlistItem", JSON.stringify(itemsOne))
                        }
                        setTimeout(() => {
                            window.history.pushState({}, "", "/wishlist");
                            setAppLocation("/wishlist");
                        }, 200)
                    }}>Add to wish list</button>
                </div>
            })
        }
    </div>
}

export default DashbaordPage;