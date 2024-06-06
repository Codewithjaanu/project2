import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      if (isEmpty) return <div className="empty"><p>Your cart is empty</p> 
    <div className="butn">
    <Link to="/"><button>View Products</button></Link>
    </div>
      </div>
    
    return (
        <>
          <div className="cart-add">
          <h1>Your All Products Add({totalUniqueItems})</h1>
          </div>
      <div className="items-cart">
        {   
    items.map((alldata)=>{
        return(
            <>
            <div className="cart-items">
            <div className="data-img-c">
            <img src={alldata.image1}/>
            </div>
            <div className="data-text-name">
            <h1>{alldata.Pack}</h1>
            <h2><i class="fa-solid fa-indian-rupee-sign"></i>{alldata.price * alldata.quantity}</h2>
            <button
              onClick={() => updateItemQuantity(alldata.id, alldata.quantity - 1)}
            >
              -
            </button>
            <span>{alldata.quantity}</span>
            <button
              onClick={() => updateItemQuantity(alldata.id, alldata.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(alldata.id)}>Remove</button>
            </div>
            </div>
            </>
        )
    })
        }
      </div>
        </>
    )
}
export { Cart }