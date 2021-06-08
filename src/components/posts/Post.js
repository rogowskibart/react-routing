import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = (props) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const downloadPost = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      );

      setResult(data);
    };
    downloadPost();
  }, [props.match.params.id]);

  return (
    <div>
      <h1 className="ui header">{result.title}</h1>
      <p>{result.body}</p>
    </div>
  );
};

export default Post;
