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
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          d="M27 17v7h5v-24h-5v12h-4v-12h-5v24h5v-7h4zm-27 11h32v4h-32v-4zm0-28h5v24h-5v-24zm9 0h5v24h-5v-24zm-4 12h4v5h-4v-5z"
          fill="#f60"
        />
      </svg>
      <h5>TOPICS</h5>
      {topics.map(topic => {
        return (
          <div className="topic-container" key={topic.title}>
            {/* rockets for now */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH9SURBVDhPYyAWFE897Fsx89j8yjknzlfMOv6ydPrRr6XTjnyDSuMGoatWMZfPOra8ftGZTwuPPvu//vKH/1tvf/2/4+73/2Uzj32GKsMOwJpnHl/ZtvLSl/1P//4/9OI/HG+99fV/+cxjL6BKMQE2zRmTj/3PnHIMzF576f3/ytknTkOVowJcNoM0Z0ENmH/kyb+KGUdnQDTUr2Lzr9rW7F+7Y4Ff1aaMshnH1mNzNgyDxEFhUjztsCdYc2Dtjt1x3Ue/Fs299r9g6rE/Lcsv/MPmbJhmkOFls46tANvuV7V1GdCA303rn/+vW3L1f9uqy2BFMA3IzkbWDPIm2ACf+k0i/rXb+7L7D/1pW4mqGRlj1QwDBZOPmJRMO/xvw9WPpGsGgcCa7XOSeg59B6aw/5tufMbQ3Lri4t/SmcfXYdUMAhGVG98UzLz0r3nt4/8gQzZDDQFpbgeGSf7U43/8K7ekQ5WjguOOjl57giK/xtdv/l8058p/mCHrr3wEOvsyOGBBsRNUu30eVAsqOOnuvv5Fc8X/lw+W/gcZAnIJyDsl0478y55w8E8jMHbiuo58A3qzFqoFFQANePiitvw/yBCgS76EV218E1i7fW7xxMPGwITVB4piUDoBpReoFlRwwtX1BdCQB0C85riTkydUGAxAUQxKJzg1MzAwAAD4nfWg7fi5fwAAAABJRU5ErkJggg==" />
            <a href={`topic/${topic.route}/trending`}>{topic.title}</a>
          </div>
        );
      })}
    </section>
  );
};

export default SidebarTopics;
