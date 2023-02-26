import React from "react";
import BlogPosts from "../components/BlogPosts";

export default function Home() {

  return (
    <div>
      <h1>Blog for React Geeks</h1>
      <p>
        Hey there! Welcome to my blog about frontend web development! This blog
        is all about my journey of learning frontend development, where I share
        my experiences, insights, and struggles along the way.{" "}
      </p>
      <p>
        I started this blog as a way to document my progress and share my
        learnings with others who are also interested in frontend web
        development. I understand how overwhelming it can be to navigate the
        plethora of technologies and tools that are out there and I hope you
        will find this information useful.
      </p>
      <BlogPosts/>
    </div>
  );
}
