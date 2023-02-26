import React from "react";
import "./StateManagement.css";
import Context from '../../components/state-management/Context'
import ReduxToolkit from "../../components/state-management/ReduxToolkit";
import UseState from "../../components/state-management/UseState";
import Table from "../../components/state-management/Table";
import BlogPosts from "../../components/BlogPosts";


export default function StateManagement() {
  return (
    <div className="state-management">
      <h1>State Management in React</h1>
      <h2>useState, Context or Redux?</h2>
      <p>
        State management is an essential part of building complex applications
        in React.js. As applications grow in size and complexity, it becomes
        increasingly important to manage and share state between components
        efficiently. React.js provides several options for state management,
        including useState, Context, and Redux. In this blog post, we will
        explore and compare these three state management options by creating a
        simple Todo app.
      </p>
      <h3>App Setup</h3>
      <p>
        Let's create an app with three components: <strong>App</strong>, which
        holds our input element, <strong>TodoList</strong>, which will be used
        to loop through todos and create a <strong>Todo</strong> component for
        each one.
      </p>
      FILE IMAGE GOES HERE
      <UseState />
      <Context />
      <ReduxToolkit />
      <h1>Summary</h1>
      <p>We've look at three ways to manage state in your React apps. It's not about which one is better or worse but rather which one is the most optimal option for your specific needs. Each has its own pros and cons and it's up to you to decide what works best for you. Here is a quick comparison that can help you with this decision.</p>
      <Table />
      <hr />
      <h3>Read more...</h3>
      <BlogPosts/>
    </div>
  );
}
