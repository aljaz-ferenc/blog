import Code from "../state-management/Code"

export default function DynamicRoutes() {
  return (
    <div>
        <h3>Dynamic Route Parameters</h3>
        <p>Dynamic routing allows us to display the same component with different data. For example, if we click on a product from a list of products, we might want to display the same ProductDetails page with data associated with that specific product.</p>
        <p>To set up the dynamic Route, we will use the 'path' prop with the value of ':id'. The semicolon is what makes the path dynamic.</p>
        <Code code={"<Route\n    path='products'\n    element={<ProductsLayout>}\n>\n   <Route\n        path=':id'\n        element={<ProductDetails />}\n        loader={productsDetailsLoader}\n    />\n</Route>"}/>
        <p>For example, if go to <Code code={'/products/iPhone'} display='inline'/>, iPhone becomes the :id.</p>
        <p>Now we can go to the ProductDetails page and figure out which :id we are currently using. We can do that by using the useParams hook which will return an object with information about dynamic parameters. </p>
        <Code code={"import { useParams } from 'react-router-dom'"}/>
        <p>Since we chose to use the ':id' as the name of the parameter, the object will contain the <Code code={'id: "iPhone"'} display='inline'/> key/value pair. We can now extract the id and display content relevant to that product.</p>
        <Code code={"const { id } = useParams();\n\n//Do something with it..."}/>
    </div>
  )
}
