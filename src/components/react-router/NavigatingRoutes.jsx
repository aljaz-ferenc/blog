import Code from "../state-management/Code"

export default function NavigatingRoutes() {
  return (
    <div>
    <h3>Navigating the Routes</h3>
        <p>In the RootLayout component we will create a navigation bar using NavLink components. NavLink is similar to the anchor tag in HTML but we can give it the 'to' prop, which is used to define the path we want the link to navigate to, also the currently active NavLink automatically gets the 'active' class that can be used for styling the current link.</p>
        <Code code={"//RootLayout.jsx\nimport {NavLink} from 'react-router-dom'\n\n<nav>\n    <NavLink to='/'>Home</NavLink>\n    <NavLink to='about'>About</NavLink>\n    <NavLink to='products'>Products</NavLink>\n</nav>"}/>
        <p>Since the RootLayout route is the parent of Home, About and Products, we can use the Outlet component inside of it, and it will render whichever child component we are currently on. This way we can keep the same navigation bar in all child routes.</p>
        <Code code={"//RootLayout.jsx\nimport { NavLink, Outlet } from 'react-router-dom'\n\nexport default function RootLayout() {\n    return (\n        <div className='root-layout'>\n            <header>\n                <nav>\n                    <NavLink to='/'>Home</NavLink>\n                    <NavLink to='about'>About</NavLink>\n                    <NavLink to='products'>Products</NavLink>\n                </nav>\n            </header>\n            <main>\n                <Outlet/>\n            </main>\n        </div>\n    )\n}"}/>
        <p>If we want to navigate the routes based on conditions, we can return the Navigate component if some condition is not met. Give it a 'to' prop and 'replace', which will replace the previous path in the browser's history so the user cannot go back.</p>
        <Code code={"if(!user){\n    return <Navigate to='/' replace={true} />  \n}"}/>
        <p>Another way for redirecting the user would be to use the useNavigate hook, which returns a function we can use to navigate to another path.</p>
        <Code code={'import {useNavigate} from "react-router-dom"\n\nconst navigate = useNavigate()\n\nif(!user){\n    navigate("/")\n};'}/>
    </div>
  )
}
