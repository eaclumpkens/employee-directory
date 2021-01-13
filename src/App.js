import React, { Component } from "react";
import './App.css';
import Container from "./components/Container";
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
          
          <Search />
          <Employees />

        </Container>
      </div>
    );
  }
  
};

export default App;
