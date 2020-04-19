import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../services/product'

class ProductCreate extends Component {
    constructor() {
        super()
        this.state = {
            product: {
                name: '',
                description: '',
                imgURL: '',
                author:'',
                sub_title: ''
            },
            created: false
        }
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
        const created = await createProduct(this.state.product)
        this.setState({ created })
    }

    render() {
        const { product, created } = this.state

        if (created) {
            return <Redirect to={`/products`} />
        }
        return (
          <Layout user={this.props.user}>
            <h1>Create Your First Post</h1>
                
                <form className="create-form" onSubmit={this.handleSubmit}>
              <div>
              <label className="author-name">Author Name</label>  
              <input
                        className="input-author"
                        placeholder='Author'
                        value={product.author}
                        name='author'
                        required
                        autoFocus
                        onChange={this.handleChange}
                />  
              </div>
              <div>
              <label className="title-name">Title</label>  
              <input
                        className="input-name"
                        placeholder='Title'
                        value={product.name}
                        name='name'
                        required
                        autoFocus
                        onChange={this.handleChange}
                />
              </div>
              <div className="subtitle-div">
              <label className="subtitle-name">Subtitle</label>  
                    <input
                        className="input-name"
                        placeholder='Sub title'
                        value={product.sub_title}
                        name='sub_title'
                        required
                        autoFocus
                        onChange={this.handleChange}
                />
              </div>
             
              <div>
              <label className="blog-div">Write your blog here</label>  
                    <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Blog post'
                        value={product.description}
                        name='description'
                        required
                        onChange={this.handleChange}
                />
              </div>
              <div>
              <label className="image-div">Insert Image Link</label>  
                    <input
                        className="input-image-link"
                        placeholder='Image Link'
                        value={product.imgURL}
                        name='imgURL'
                        required
                        onChange={this.handleChange}
              />
              </div>
              <button type='submit' className="submit-button">Submit Post</button>
            </form>
            
            </Layout>
        )
    }
}

export default ProductCreate