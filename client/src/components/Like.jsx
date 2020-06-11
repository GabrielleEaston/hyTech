import React, { Component } from 'react';
import Heart from '../images/like.png'


class Like extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: this.props.like,
      updated: false
    }
  }


  updateLikes = () => {

    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
  }

  render() {

    return (
      <div>
        <p onClick={this.updateLikes}><img style={{width: 25}} src={Heart} />{this.state.likes}</p>
      </div>
    );
  }
}



export default Like;