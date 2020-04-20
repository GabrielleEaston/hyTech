import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = (props) => {


  return (
    <>
      
    <div className="product">
     
        <div className="small-text">{props.name}</div>
        <div className="small-text">{props.sub_title}</div>
      <Link className="button" to={`/products/${props._id}`}>
          <h4>Read</h4>
      </Link>
      <div className="product-description">{props.description}</div>
     
    </div>
  </>
  )
}

export default SideBar