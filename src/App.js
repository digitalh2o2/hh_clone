import React, { Component } from "react";
import SidebarTopics from "./components/SidebarTopics";
import api from "./utils/api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: ""
    };
  }

  componentDidMount() {
    api
      .hackerHuntPromise()
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

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
