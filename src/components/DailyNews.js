import React from "react";

const DailyNews = props => {
  const { theNews } = props;
  return (
    <div>
      {theNews.map(article => {
        return (
          <div className="article-container">
            <div className="left-article-details">
              <span>
                <h5>
                  <em>▲</em> {article.votes}
                </h5>
              </span>
              <span>
                
                  <svg class="comment-12" width="12" height="12">
                    <g>
                      <path d="M3.175 9.412c.842.375 1.803.588 2.825.588 3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5c0 1.052.39 2.028 1.056 2.833l-1.056 3.167 3.175-1.588z" />
                    </g>
                  </svg>{" "}
                  {article.comments}
                
              </span>
            </div>
            <div className="right-article-details">
              <a href={article.link}>
                <h2>{article.title}</h2>
              </a>
              <p>{article.desc}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DailyNews;
