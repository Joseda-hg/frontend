import React from "react";

export function Card() {
  return (
    <>
      <div className="card mb-3">
        <img src="https://www.foodstoragemoms.com/wp-content/uploads/2021/03/Friendship-Soup-Mix-In-A-Jar-20-700x445.jpeg" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
            <button className="btn btn-primary"> Agregar al pedido </button>
          </p>
        </div>
      </div>
    </>
  );
}
