import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
  
    
    return (
      <>
        
            <Link className="product" to={`/products/${props._id}`}>
          <div className="product-name">{props.name}</div>
    <div>{props.createdAt}</div>
                <img className="product-image" src={props.imgURL} alt={props.name} />
          <div className="product-description">{props.description}</div>
            </Link>
        </>
    )
}

export default Product