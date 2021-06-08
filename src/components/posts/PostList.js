import "./PostList.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const downloadPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setResults(data);
    };
    downloadPosts();
  }, []);

  const renderedResults = results.map(({ id, title, body }) => {
    return (
      <div key={id} className="single-post">
        <Link to={`/posts/${id}`}>
          <div className="ui fluid card">
            <div className="content">
              <div className="header">{title}</div>
              <div className="description">{body}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="ui cards">{renderedResults}</div>;
};

export default PostList;
