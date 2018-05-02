import React, { Component } from "react";
import SidebarTopics from "./components/SidebarTopics";
import "./css/normalize.css";
import "./css/skeleton.css";
import './css/custom.css'
import api from "./utils/api";

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
        this.setState({
          news: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { news } = this.state;
    console.log("the news", news);
    return (
      <div className="container">
        <div className="row">
          <div className="two columns">
            <SidebarTopics />
          </div>
          <div className="ten columns">
          
          <input />
          
            
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
