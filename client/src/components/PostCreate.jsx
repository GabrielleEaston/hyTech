import React, { Component } from "react";
import Layout from "./shared/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../services/post";
import { Form, Container, Button } from "react-bootstrap";
class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        description: "",
        imgURL: "",
        author: "",
        sub_title: "",
        user_id: this.props.user.id || this.props.user._id
      },
      created: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    });
  };

  handleChangeSelect = e => {
    const { value } = e.target;
    this.setState({
      user_id: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const created = await createPost(this.state.post);
    this.setState({ created });
  };

  render() {
    const { post, created } = this.state;

    if (created) {
      return <Redirect to={`/posts`} />;
    }
    return (
      <Layout user={this.props.user}>
        <Container>
          <h1>Create Your First Post</h1>

          <Form className="create-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formAuthorname">
              <Form.Label className="author-name">Author Name</Form.Label>
              <Form.Control
                type="text"
                className="input-author"
                placeholder="Author"
                value={post.author}
                name="author"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label className="title-name">Title</Form.Label>
              <Form.Control
                type="text"
                className="input-name"
                placeholder="Title"
                value={post.name}
                name="name"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSubTitle">
              <Form.Label className="subtitle-name">Subtitle</Form.Label>
              <Form.Control
                type="text"
                className="input-name"
                placeholder="Sub title"
                value={post.sub_title}
                name="sub_title"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBlogText">
              <Form.Label className="blog-div">Write your blog here</Form.Label>
              <Form.Control
                as="textarea"
                rows="6"
                className="textarea-description"
                placeholder="Blog post"
                value={post.description}
                name="description"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBlogText">
              <Form.Label className="image-div">Insert Image Link</Form.Label>
              <Form.Control
                className="input-image-link"
                placeholder="Image Link"
                value={post.imgURL}
                name="imgURL"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              type="submit"
              className="submit-button"
              variant="outline-info"
            >
              Submit Post
            </Button>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default PostCreate;
