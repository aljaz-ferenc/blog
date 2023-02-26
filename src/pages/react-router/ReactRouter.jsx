import React from "react";
import NavigatingRoutes from "../../components/react-router/NavigatingRoutes";
import LoadersErrors from "../../components/react-router/LoadersErrors";
import DynamicRoutes from "../../components/react-router/DynamicRoutes";
import CreatingRouter from "../../components/react-router/CreatingRouter";
import BlogPosts from "../../components/BlogPosts";

export default function ReactRouter() {
  return (
    <div className="react-router">
      <h1>React Router Basics</h1>
      <p>
        React Router is a popular routing library for React applications. It
        allows you to build single-page applications with multiple views and
        URLs, without the need for a full page refresh and multiple HTTP
        requests.
      </p>
      <p>
        At its core, React Router provides a set of components for defining
        routes in your application. These components can be used to define which
        component should be rendered for a given URL, as well as any additional
        data or parameters that should be passed to that component.
      </p>
      <p>
        One of the key benefits of using React Router is that it allows you to
        build complex applications with multiple views and nested routes, while
        still maintaining a simple and easy-to-use API.
      </p>
      <p>
        Today we will go through the basics of the latest version of React
        Router (version 6.4), this will include the setup, creating a router,
        dynamic routing and loaders. In future posts we will discover the
        more advanced features React Router has to offer.
      </p>
      <CreatingRouter />
      <NavigatingRoutes />
      <DynamicRoutes />
      <LoadersErrors />
      <h3>Conclusion</h3>
      <p>
        With its simple and intuitive API, as well as its advanced features for
        code splitting, lazy loading, and server-side rendering, which we will
        cover in future posts, React Router makes it easy to build scalable and
        performant applications that can grow and evolve over time. So if you're
        working on a React project and need to handle routing logic, be sure to
        give React Router a try and see how it can help streamline your
        development process.
      </p>
      <hr />
      <h3>Read more...</h3>
      <BlogPosts/>
    </div>
  );
}
