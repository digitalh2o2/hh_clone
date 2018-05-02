import React, { Component } from "react";
import SidebarTopics from "./components/SidebarTopics";
import DailyNews from "./components/DailyNews";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/custom.css";
import api from "./utils/api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: ""
    };

    this.sortNews = this.sortNews.bind(this);
  }

  componentDidMount() {
    api
      .hackerHuntPromise()
      .then(res => res.json())
      .then(res => {
        this.sortNews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  sortNews(res) {
    const newsRank = Object.assign([], res);
    const sortedNews = newsRank.sort((a, b) => {
      return b.votes - a.votes;
    });
    console.log("the sorted", sortedNews);
    this.setState({ news: sortedNews });
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
            {this.state.news.length === 0 ? (
              <p>Loading..</p>
            ) : (
              <DailyNews theNews={news} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
