import React, { Component } from 'react'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../services/post'
import { Form } from "react-bootstrap";
class PostCreate extends Component {
    constructor() {
        super()
        this.state = {
            post: {
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
            post: {
                ...this.state.post,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPost(this.state.post)
        this.setState({ created })
    }

    render() {
        const { post, created } = this.state

        if (created) {
            return <Redirect to={`/posts`} />
        }
        return (
          <Layout user={this.props.user}>
            <h1>Create Your First Post</h1>
                
                <Form className="create-form" onSubmit={this.handleSubmit}>
              <div>
              <label className="author-name">Author Name</label>  
              <input
                        className="input-author"
                        placeholder='Author'
                        value={post.author}
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
                        value={post.name}
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
                        value={post.sub_title}
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
                        value={post.description}
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
                        value={post.imgURL}
                        name='imgURL'
                        required
                        onChange={this.handleChange}
              />
              </div>
              <button type='submit' className="submit-button">Submit Post</button>
                </Form>
            </Layout>
        )
    }
}

export default PostCreate