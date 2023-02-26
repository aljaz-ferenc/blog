import Code from "../state-management/Code"

export default function LoadersErrors() {
  return (
    <div>
        <h3>Loaders and Throwing Errors</h3>
        <p>Let's take a look at two more props that a Route component can have: loader and errorElement.</p>
        <Code code={'<Route\n    index\n    element={<Products />}\n    loader={productsLoader}\n    errorElement={<ProductsError />}\n/>'}/>
        <p>Loaders are functions that are executed just before the components is rendered. They can be used for fetching data before displaying it in the component. The errorElement prop defines a component that will be rendered in case the loader function throws an error. Errors will bubble up to the parent Route component so we could give it the errorElement prop and it would catch any error that is thrown in any of its child components.</p>
        <p>Let's create a loader function that fetches some data and throws an error if it fails.</p>
        <Code code={'export const productsLoader = async () => {\n    const res = await fetch("http://www.cool-products.com/products.")\n    if(!res.ok){\n        throw Error("Could not fetch the products")\n    }\n    return res.json()\n}'}/>
        <p>In order to use the data returned from the loader, 'react-router-dom' provides the useLoaderData hook.</p>
        <Code code={'import { useLoaderData, Link } from "react-router-dom"'}/>
        <br />
        <Code code={'const products = useLoaderData()'}/>
    </div>
  )
}
