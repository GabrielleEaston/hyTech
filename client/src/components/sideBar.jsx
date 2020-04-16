import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const sideBar = (props) => {
    return (
      <>
        
            <Link className="product" to={`/products/${props._id}`}>
                <img className="product-image" src={props.imgURL} alt={props.name} />
          <div className="product-name">{props.name}</div>
          <div className="product-description">{props.description}</div>
            </Link>
        </>
    )
}

export default sideBar