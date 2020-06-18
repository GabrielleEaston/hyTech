import React, { Component } from "react";
import Layout from "./shared/Layout";
import { getPost } from "../services/post";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        description: "",
        imgURL: "",
        author: "",
        sub_title: ""
      }
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const post = await getPost(id);
    this.setState({ post });
  }

  render() {
    const { post } = this.state;
    return (
      <Layout user={this.props.user}>
        <div className="post-detail">
          <div className="detail">
            <div className="title">{post.name}</div>
            <div className="sub-title">{post.sub_title}</div>
            <div className="author">{post.author}</div>
            <img
              className="product-detail-image"
              src={post.imgURL}
              alt={post.name}
            />
            <div className="description">{post.description}</div>
            {this.props.user && this.props.user._id === post.user_id && (
              <div className="button-container">
                <Button variant="light">
                  <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                    Edit
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default PostDetail;
