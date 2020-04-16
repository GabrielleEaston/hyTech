import React, { Component } from 'react'
import './ProductDetail.css'
import Layout from './shared/Layout'
import { getProduct } from '../services/product'
import { Link } from 'react-router-dom'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        name: '',
        description: '',
        imgURL: '',
        sub_title: ''
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const product = await getProduct(id)
    this.setState({ product })
  }

  render() {
    const { product } = this.state
    return (
      <Layout user={this.props.user}>
        <div className="product-detail">
          <div className="detail">
            <div className="title">{product.name}</div>
            <div className="sub-title">{product.sub_title}</div>
          <img className="product-detail-image" src={product.imgURL} alt={product.name} />
            <div className="description">{product.description}</div>
            <div className="button-container">
              <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProductDetail
