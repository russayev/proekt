import React, { useState, useEffect } from "react";

const Card = () => {
  const data = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartData, setCartData] = useState(data);

  useEffect(() => {
    if (cartData.length > 0) {
      let emptyCart = document.getElementById("emptyCart");
      emptyCart.style.display = "none";
    }
  }, [cartData]);

  const handleRemove = (id) => {
    const updatedCartData = cartData.filter((element) => element.id !== id);
    setCartData(updatedCartData);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
  };

  const handleBuyNow = () => {
    window.location.href = "./payment";
  };

  const handleIncrement = (id) => {
    const updatedCartData = cartData.map((element) =>
      element.id === id
        ? { ...element, quantity: element.quantity + 1 }
        : element
    );
    setCartData(updatedCartData);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
  };

  const handleDecrement = (id) => {
    const updatedCartData = cartData.map((element) =>
      element.id === id && element.quantity > 1
        ? { ...element, quantity: element.quantity - 1 }
        : element
    );
    setCartData(updatedCartData);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
  };

  return (
    <div>
      <hr />
      <br />
      <br />

      <div id="emptyCart">
        <img
          src="https://www.rentomojo.com/public/images/error/no-cart.png"
          alt=""
        />
        <h1>No Items in Cart</h1>
        <p>
          Add a few items to your cart and come back here for an express
          checkout process!
        </p>
        <div>
          <button id="emptbtn">
            <a href="./products"> Browse catalogue</a>
          </button>
        </div>
      </div>

      <div id="cart">
        {cartData.map((ele) => (
          <div key={ele.id}>
            <img src={ele.img} alt="" />
            <div>
              <h4>{ele.name}</h4>
              <p className="category">{ele.category}</p>
              <p className="price">₸{ele.price}</p>
            </div>
            <div id="qunt">
              <button className="qunt" onClick={() => handleIncrement(ele.id)}>
                +
              </button>
              <p>{ele.quantity}</p>
              <button className="qunt" onClick={() => handleDecrement(ele.id)}>
                -
              </button>
            </div>
            <button id="buy" onClick={handleBuyNow}>
              Buy Now
            </button>
            <div id="removebtn">
              <button id="remove" onClick={() => handleRemove(ele.id)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
