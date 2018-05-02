import React, { Component } from "react";
import SidebarTopics from "./components/SidebarTopics";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarTopics />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
