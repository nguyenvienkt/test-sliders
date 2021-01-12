import React, { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ]);

  const sortUpvotes = () => {
    let upvote = [
      ...articles.sort(function (a, b) {
        return b.upvotes - a.upvotes;
      }),
    ];
    setArticles(upvote);
  };
  const sortRecent = () => {
    let recent = [
      ...articles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }),
    ];
    setArticles(recent);
  };

  return (
    <div>
      <div className="container">
        <h1>Articles</h1>
        <div className="actions">
          <button className="btn" onClick={() => sortUpvotes()}>
            Most upvotes
          </button>
          <button className="btn" onClick={() => sortRecent()}>
            Most recent
          </button>
        </div>
        <div className="article">
          {articles.map((item, index) => {
            return (
              <div key={index} className="card">
                <h3>{item.title} </h3>
                <p>Upvotes: {item.upvotes} </p>
                <span>Date:{item.date}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
