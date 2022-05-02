import React from "react";

function FunctionalComp() {

  return <p>This is a Functional component</p>;

}

export class ClassComp extends React.Component {

  render() {

    return <p><FunctionalComp/> in a Class Component</p> ;

  }

}

export default ClassComp;