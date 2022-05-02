import React, { Component } from "react";

class Classprops extends Component {

  render() {

    return (

      <div>

        <h1>

          Hello!!! I am {this.props.name} from {this.props.place}! 
        </h1>

      </div>

    );

  }

}

export default Classprops;