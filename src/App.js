import React, { Component } from "react";
import './App.css';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Employees from "./components/Employees";
import Search from "./components/Search";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>

          {/* APP HEADING */}
          <header>
            <h1>Employee Directory</h1>
            <h2>
              Click on carrots to filter by heading or 
              use the search box to narrow your results.
            </h2>
          </header>

          {/* SEARCH BOX */}
          <Search />

          {/* RESULT HEADINGS */}
          <div className="directory-head">
            <Row>
              <Col size="2">
                <h3>Image</h3>
              </Col>
              <Col size="2">
                <h3>Name</h3>
              </Col>
              <Col size="3">
                <h3>Phone</h3>
              </Col>
              <Col size="3">
                <h3>Email</h3>
              </Col>
              <Col size="2">
                <h3>DOB</h3>
              </Col>
            </Row>
          </div>
          <hr></hr>

          {/* RESULTS */}
          <Employees />

        </Container>
      </div>
    );
  }
  
};

export default App;
