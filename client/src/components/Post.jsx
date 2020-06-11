import React from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import { Button, Container } from 'react-bootstrap';

const Post = (props) => {
  return (
    <Container>
      <div className="post-name">{props.name}</div>
      <p className="small-text">
        {props.createdAt.split("T")[0]}{" "}
        <span className="author">{props.author}</span>
      </p>

      <div className="post">
        <img className="post-image" src={props.imgURL} alt={props.name} />
        <div className="post-description">{props.description}</div>
        <Like like={props.like} />
        <Link to={`/posts/${props._id}`}>
          <Button variant="dark">Read More</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Post;
