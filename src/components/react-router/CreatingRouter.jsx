import Code from "../state-management/Code";

export default function CreatingRouter() {
  return (
    <div>
      <p>
        First we need to install the react-router-dom library by running{" "}
        <Code code={"npm install react-router-dom"} display="inline" /> in the
        terminal.
      </p>
      <p>
        To create a router, we will import import a few functions and components
        from 'react-router-dom'{" "}
      </p>
      <Code
        code={
          "//App.jsx\nimport { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'"
        }
      />
      <p>
        To create a router we use the createBrowserRouter function in which we
        pass createRoutesFromElements with defined routes. Each route needs the
        'path' prop that tells React where to navigate and the 'element' prop
        pointing to the component that should be rendered on that specific path.
        The '*' path will match any path that isn't defined or doesn't exist, so
        we can use it to display the NotFound component. Make sure to put it
        below all other routes beacause matching happens from top to bottom.
      </p>
      <Code
        code={
          '//App.jsx\nconst router = createBrowserRouter(\ncreateRoutesFromElements(\n    <Route path="/" element={<RootLayout />}>\n        <Route index element={<Home />} />\n        <Route path="about" element={<About />} />\n        <Route path="products" element={<Products />} />\n    </Route>\n    <Route to="*" element={<NotFound />}/>    \n)\n);'
        }
      />
      <p>
        When our router is complete, we can provide it to the app using the
        RouterProvider component with the 'router' prop.
      </p>
      <Code
        code={
          "//App.jsx\nfunction App() {\n    return (\n        <RouterProvider router={router} />\n    );\n}"
        }
      />
    </div>
  );
}
