import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getPost, updatePost, deletePost } from '../services/post';
import { Form, Container, Button } from "react-bootstrap";

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
        <div className="product-edit container">
          <div className="image-container">
            <img className="edit-product-image" src={post.imgURL} alt={post.name} />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formImageURL">
              <Form.Control
                className="edit-input-image-link"
                placeholder='Image Link'
                value={post.imgURL}
                name='imgURL'
                required
                onChange={this.handleChange}
              />
              
              </Form.Group>
            </Form>
          </div>
          <Form className="edit-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formAuthor"> 
            <Form.Control
              className="input-author"
              placeholder='Author Name'
              value={post.author}
              name='author'
              required
              autoFocus
              onChange={this.handleChange}
            />
          </Form.Group>
            <Form.Group controlId="formTitle">
            <Form.Control
              className="input-name"
              placeholder='Name'
              value={post.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            
            </Form.Group>
           
            <Form.Group controlId="formSubTitle">
            <Form.Control
              className="input-subtitle"
              placeholder='Sub title'
              value={post.sub_title}
              name='sub_title'
              required
              autoFocus
              onChange={this.handleChange}
            />
            </Form.Group>
            <Form.Group controlId="textarea">
            <Form.Control as="textarea" rows="6"
              className="textarea-description"
              rows={10}
              cols={78}
              placeholder='Description'
              value={post.description}
              name='description'
              required
              onChange={this.handleChange}
            />
            </Form.Group>
         

            <Button variant="outline-info" type='submit' className="save-button">Save</Button>
            <Button variant="outline-danger" className="delete-button" onClick={(this.handleDelete)}>Delete</Button>
          </Form>
        </div>
      </Layout>
    )
  }
}

export default PostEdit