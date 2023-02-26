import React from "react";
import { Link } from "react-router-dom";
import stateThumb from "../images/posts/state-management.png";
import routerThumb from "../images/posts/react-router.png";
import './BlogPosts.css'

export default function BlogPosts() {
  return (
    <div className="blog-posts">
      <div className="blog-post">
        <Link to="/state-management">
          <img src={stateThumb} alt="" />
        </Link>
      </div>
      <div className="blog-post">
        <Link to="/react-router">
          <img src={routerThumb} alt="" />
        </Link>
      </div>
    </div>
  );
}
