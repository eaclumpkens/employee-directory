import React, { Component } from "react";
import Employees from "./components/Employees";
import Search from "./components/Search";
import { Container } from "react-bootstrap";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>

          {/* APP HEADING */}
          <header>
            <h1>Employee Directory</h1>
            <h2>
              Click on a column title to sort
              or utilize the search bar to find 
              the information you need.
            </h2>
          </header>
          
          <Search />
          <Employees />

        </Container>
      </div>
    );
  }
  
};

export default App;
