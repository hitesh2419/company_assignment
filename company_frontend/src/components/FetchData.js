import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slice/CartSlice";

const FetchData = () => {
  const { items, status, error } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart(product) {
    console.log(product);
    dispatch(addToCart(product));
    navigate("/cart");
  }
  
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
          <div className="row align-items-start">
            {status == "pending" ? (
              <p>Loading....</p>
            ) : error ? (
              <p>
                An error occured...
                <p />
              </p>
            ) : (
              items.map((item) => (
                <div key={item.id} class="col-sm" style={{ border: "none" }}>
                  <div
                    className="card"
                    style={{
                      height: "250px",
                      width: "400px",
                    }}
                  >
                    <div className="overlay"></div>
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                      <h5 className="card-text"> {item.info}</h5>
                      <div className="card-body-a">
                        <a className="btn btn-primary">₹ {item.price}</a>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      style={{ position: "absolute", zIndex: "3" }}
                      onClick={() => handleAddToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <br></br>
                </div>
              ))
            )}
          </div>
      </div>
    </div>
  );
};

export default FetchData;
