import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotal,
  getPromo, 
} from "../slice/CartSlice";

const Carts = () => {
  const cart = useSelector((state) => state.cart);
  const abc = useSelector((state) => state);
  console.log(abc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const [promo, setPromo] = useState("");

  const handleChangePromo = (e) => {
    setPromo(e.target.value);
  };
  const checkPromo = () => {
    dispatch(getPromo(promo));
  };
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="jumbotron jumbotron-fluid">
      <h2>Course Cart</h2>
      <div>
        {cart.cartItems.length === 0 ? (
          <div>
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/courses">
                <span>Start Exploring Courses</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-container">
            <div className="titles">
              <h3 className="products-titles">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.info}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">
                    {parseInt(cartItem.price)}{" "}
                  </div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    
                    {parseInt(cartItem.price) * parseInt(cartItem.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button onClick={() => handleClearCart()} className=" clear-cart btn">
                Clear Cart
              </button>

              <div className="cart-checkout">
                <div className="nav-link">

                  <input type="text" style={{width:"60%"}} onChange={handleChangePromo}></input>
                  <button className="applybtn btn " onClick={checkPromo}>Apply Promocode</button>{" "}
                  
                </div>
                <div className="subtotal">
                  <span>subtotal </span>
                  <span className="amount">
                    ₹ {parseInt(cart.cartTotalAmount)}
                  </span>
                </div>

                <Link className="nav-link" to="/checkout">
                  <button className="btn btn-primary">Check Out</button>
                </Link>
                <div className="continue-shopping">
                  <Link to="/courses">
                    <span> Continue Ordering</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
