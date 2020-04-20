import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = (props) => {


  return (
    <>
      
    <div className="txt">
     
        <div className="small-text">{props.name}</div>
        <div className="small-text">{props.sub_title}</div>
        <div className="product-description">{props.description}</div>
      <Link className="button" to={`/products/${props._id}`}>
          Read
      </Link>
      
     
    </div>
  </>
  )
}

export default SideBar