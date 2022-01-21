import React from "react";

export const CheckOut = () => {
  return(
    <>
    <div className="jumbotron">
    <div style={{marginTop:"30px"}}><h2>Enter The Details</h2></div>
      <div className="contactalign">
       <form>
         <div className="contacts">
         <input type="text" placeholder="Name"></input>
         </div>
         <div className="contacts">
         <input type="Email" placeholder="Email"></input></div>
         <div className="contacts">
         <input type="Location" placeholder="Location"></input></div>
       </form>

       </div> 
       <div className="contactsbtn">
       <button className="btn btn-primary">Place Order</button>
       </div>
       </div>
    </>
  )
}
