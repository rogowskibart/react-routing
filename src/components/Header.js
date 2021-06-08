import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui pointing menu">
      <div className="active item">
        <Link to="/posts" className="item">
          Posts
        </Link>
      </div>
      <div className="item">
        <Link to="/create" classname="item">
          New post
        </Link>
      </div>
    </div>
  );
};

export default Header;
