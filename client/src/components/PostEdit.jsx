import React, { Component } from 'react'
//import './ProductEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getPost, updatePost, deletePost } from '../services/post'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
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
    const post = await getPost(id)
    this.setState({ post })
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updatePost(id, this.state.post)
    this.setState({ updated })
  }
  handleDelete = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const deleted = await deletePost(id, this.state.post)
    this.setState({ deleted })
  }

  render() {

    const { post, updated, deleted } = this.state

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    else if (deleted) {
      return <Redirect to={`/posts`} />
    }


    return (
      <Layout user={this.props.user}>
        <div className="product-edit">
          <div className="image-container">
            <img className="edit-product-image" src={post.imgURL} alt={post.name} />
            <form onSubmit={this.handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder='Image Link'
                value={post.imgURL}
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
              value={post.author}
              name='author'
              required
              autoFocus
              onChange={this.handleChange}
            />

            <input
              className="input-name"
              placeholder='Name'
              value={post.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <br />

            <input
              className="input-subtitle"
              placeholder='Sub title'
              value={post.sub_title}
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
              value={post.description}
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

export default PostEdit