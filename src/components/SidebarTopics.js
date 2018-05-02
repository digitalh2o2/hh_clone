import React from "react";

const topics = [
  { route: "development", title: "Development" },
  { route: "system", title: "System" },
  { route: "tools", title: "Tools" },
  { route: "data-science", title: "Data science" },
  { route: "blockchain", title: "Blockchain" },
  { route: "mobile", title: "Mobile" },
  { route: "awesome-lists", title: "Awesome lists" },
  { route: "social", title: "Social" },
  { route: "visual", title: "Visual" },
  { route: "open-source", title: "Open source" },
  { route: "all-topics", title: "All topics" }
];

const SidebarTopics = props => {
  return (
    <section className="sidebar">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          d="M27 17v7h5v-24h-5v12h-4v-12h-5v24h5v-7h4zm-27 11h32v4h-32v-4zm0-28h5v24h-5v-24zm9 0h5v24h-5v-24zm-4 12h4v5h-4v-5z"
          fill="#f60"
        />
      </svg>
      <h5>Topics</h5>
      {topics.map(topic => {
        return (
          <div className="topic_container">
            <a href={`topic/${topic.route}/trending`}>{topic.title}</a>
          </div>
        );
      })}
    </section>
  );
};

export default SidebarTopics;
