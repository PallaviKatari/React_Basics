//Boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as ReactBootstrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
//React logo
import logo from './React.jpg';
//For bootstrap modal for accessing the useState
import { useState } from 'react';
import React from 'react';
import './App.css';
//users.json file
import Users from "./users.json";
// Importing the function from Home.js
import Display from "./Components/Home";
//employees.json file
import employee from './employee.json';
//Components Demo
import ClassComp from "./Components/ComponentsDemo";
//React Props
import Classprops from "./Components/Classprops";

function App(props) {

  //Bootstrap Modal Function
  const [show, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);
  return (
    //Bootstrap Navbar
    <div className="App">
      <Navbar fixed='top' bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img
            src={logo} //import logo from './React.jpg';
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Brand logo"
          />  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><br></br><br></br><br></br><br></br><br></br><br></br> 
      {/*Components Demo*/}
       <ClassComp /> 
      {/*Home.js Display function*/}
       <Display></Display> 
      {/*React Props */}
      <div>

        <Classprops name="John" place="Bangalore" />

        <Classprops name="Peter" place="UK" />

        <Classprops name="Jancy" place="US" />

        <Classprops name="Amy" place="US" />

      </div>
      <div className="App p-4">
        {/*Boostrap Modal*/}
        <Button variant="success" onClick={modalShow}>
          Subscribe
        </Button>
        <Modal show={show} onHide={modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>React Training</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal Demo</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={modalClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/*Accessing users.json*/}
      <div className="App">
        <h1>Users list</h1>
        {Users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
      {/*Accessing employees.json*/}
      <div className="App">
        <h1>Employees list</h1>
        {employee.map((record, i) =>
          <div key={i}>
            <img src={record.path} />

            {record.id} - {record.firstName}</div>)}
      </div>
      <Second/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Welcome to the {props.name}</h1>
      <App1 />
      <First/>
       <App2 /> 
    </div>
  );
}
App.defaultProps = {

  name: "World of Programming!"

}
class App1 extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    );
  }
}
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>DLITHE</h1>
      </div>
    );
  }
}
class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>HELLO TRAINEES</h2>
        <p>WELCOME TO REACT JS</p>
      </div>
    );
  }
}
class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
        [
          {
            "name": "JOHN"
          },
          {
            "name": "PETER"
          },
          {
            "name": "PAUL"
          },
          {
            "name": "JANCY"
          }
        ]
    }
  }
  render() {
    return (
      <div>
         <StudentName /> 
        <ul>
          {/* access the data array's key i.e name and bind it to the List component's props */}
          {this.state.data.map((item) => <List data={item} />)}
        </ul>
      </div>
    );
  }
}
class StudentName extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Name Details</h1>
      </div>
    );
  }
}
class List extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}

export default App;
