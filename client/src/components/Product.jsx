import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product-name">{props.name}</div>
      <p className="small-text">
        {props.createdAt.split("T")[0]}{" "}
        <span className="author">{props.author}</span>
      </p>

      <div className="product">
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="product-description">{props.description}</div>

        <Link to={`/products/${props._id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
