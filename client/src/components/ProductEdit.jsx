import React, { Component } from 'react'
import './ProductEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getProduct, updateProduct, deleteProduct } from '../services/product'

class ProductEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        name: '',
        description: '',
        imgURL: '',
        sub_title: '',
        author: ''
      },
      updated: false,
      deleted: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const product = await getProduct(id)
    this.setState({ product })
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      product: {
        ...this.state.product,
        [name]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updateProduct(id, this.state.product)
    this.setState({ updated })
  }
  handleDelete = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const deleted = await deleteProduct(id, this.state.product)
    this.setState({ deleted })
  }

  render() {

    const { product, updated, deleted } = this.state

    if (updated) {
      return <Redirect to={`/products/${this.props.match.params.id}`} />
    }

    else if (deleted) {
      return <Redirect to={`/products`} />
    }


    return (
      <Layout user={this.props.user}>
        <div className="product-edit">
          <div className="image-container">
            <img className="edit-product-image" src={product.imgURL} alt={product.name} />
            <form onSubmit={this.handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder='Image Link'
                value={product.imgURL}
                name='imgURL'
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-author"
              placeholder='Author Name'
              value={product.author}
              name='author'
              required
              autoFocus
              onChange={this.handleChange}
            />

            <input
              className="input-name"
              placeholder='Name'
              value={product.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <br />

            <input
              className="input-subtitle"
              placeholder='Sub title'
              value={product.sub_title}
              name='sub_title'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <br />
            <textarea
              className="textarea-description"
              rows={10}
              cols={78}
              placeholder='Description'
              value={product.description}
              name='description'
              required
              onChange={this.handleChange}
            />
            <br />

            <button type='submit' className="save-button">Save</button>
            <button className="delete-button" onClick={(this.handleDelete)}>Delete</button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default ProductEdit