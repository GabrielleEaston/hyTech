import React, { Component } from "react";



class DarkMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
    };
 
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  
  }

  toggleDarkMode() {
    this.setState((state) => {
      if (state.mode === true) {

        return { mode: false };
      } else {
     
        return { mode: true };
      }
    });
  }

  render() {
    if (this.state.mode) {
      return (
          
          <body className="darkMode">
        
          <button onClick={this.toggleDarkMode}>
            Dark
          </button>
       </body>
      );
    } else {
      return (
          
          <body className="lightMode">
       
          <button onClick={this.toggleDarkMode}>
            Light
          </button>
      </body>
        
      );
    }
  }
}

export default DarkMode;
