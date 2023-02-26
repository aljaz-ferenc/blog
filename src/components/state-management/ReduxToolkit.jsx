import React from 'react'
import Banner from './Banner'
import Code from './Code'

export default function ReduxToolkit() {
  return (
    <div>
        <Banner heading='Redux Toolkit'/>
        <p>Lastly, let's explore how we can manage state with Redux, specifically Redux Toolkit. Just like Context, with Redux Toolkit we can create a centralized store that holds our state. Redux is usually used for managing one or more complex states and is a total overkill for our simple app but we can still see how it works. For this let's run 'npm install react-redux @reduxjs/toolkit' to install the needed libraries.</p>
        <p>Now let's create a folder called 'store' that contains two files: store.jsx and TodoSlice.jsx</p>
        <h3>Creating a slice</h3>
        <p>In TodoSlice.jsx we need to creates a TodoSlice using the createSlice method which will hold the initial state and reducer functions that update that state.</p>
        <Code code='import { createSlice } from "@reduxjs/toolkit";'/>
        <p>The createSlice method takes an object as an argument where we define the name, initial state and reducer functions.</p>
        <Code code={'const todoSlice = createSlice({\n    name: "todoSlice",\n    initialState: [],\n    reducers: {}\n})'}/>
        <p>Reducers are functions that take two parameters: state and action. The first parameter represents the current state which the reducer will update. Redux Toolkit allows us to write code as if we're updating the state by mutating it. We can use the action parameter to attach a payload to the reducer when dispatching it from a component later.</p>
        <Code code={'addTodo(state, action) {\n    state = state.push(action.payload);\n},'}/>
        <p>Lastly we need to export actions and the reducer which are available on the slice. These actions will be dispatched from components when we want to update the state and the reducer is needed for subscribing components to the store.</p>
        <Code code={'export const actions = todoSlice.actions;\nexport const todoReducer = todoSlice.reducer;'}/>
        SHOW THE WHOLE SLICE FILE
        <h3>Creating Store</h3>
        <p>In store.jsx we can import the configureStore method and the reducer we've exported in the previous steps.</p>
        <Code code={"//store.jsx\nimport {configureStore} from '@reduxjs/toolkit'\nimport { todoReducer } from './TodoSlice'"}/>
        <p>We can create and export the store by passing the reducer to the configureStore function.</p>
        <Code code={'//store.jsx\nconst store = configureStore({\n    reducer: todoReducer}\n)\n\nexport default store'}/>
        SHOW THE WHOLE STORE FILE
        <p>Similar to Context, we need to provide the store using the Provider component and wrapping it around the app. We will do this in main.jsx.</p>
        <Code code={'//main.jsx\nimport store from "./store/store";\nimport { Provider } from "react-redux";\n\nReactDOM.createRoot(document.getElementById("root")).render(\n    <Provider store={store}>\n        <App />\n    </Provider>);'}/>
        <h3>Consuming State</h3>
        <p>Any component can now subscribe to our store with the useSelector hook provided by 'react-redux' which we point to the reducer we want to have access to. Let's import it first.</p>
        <Code code={'//TodoList.jsx\nimport { useSelector} from "react-redux";\n'}/>
        <p>And subscribe to the store.</p>
        <Code code={'//TodoList.jsx\nconst store = useSelector(state => state)'}/>
        SHOW THE TODOLIST FILE
        <h3>Updating State</h3>
        <p>A component can update the state by dispatching an action with a payload defined in our slice. For this we need a dispatch functions which is returned by the useDispatch hook from 'react-redux' and actions which are imported from the TodoSlice.jsx.</p>
        <Code code={'//Todo.jsx\nimport { useDispatch } from "react-redux";\nimport { actions } from "../store/TodoSlice";'}/>
        <p>Use the dispatch function by providing it the the reducer from the actions object and passing it a payload as an argument if needed.</p>
        <Code code={'//Todo.jsx\nconst dispatch = useDispatch()\n\nfunction handleRemoveTodo(){\n    dispatch(actions.removeTodo(id))\n}'}/>
        <p>As stated before, Redux Toolkit is not a great choice for small apps where state can be easily managed with useState or Context. It might add unnecessary complexity and bulk size since we need to add two libraries to the project. But in larger apps it makes code resuable and clear because all we need to do is dispatch actions from components after the store has been set up.</p>
        <h3>TL;DR</h3>
        <p>1: create a slice with initial state and reducers and export actions and reducer from the slice object.</p>
        <p>2: create and export store that receives the reducer as a parameter.</p>
        <p>3: Wrap the Provider component around the app and provide it with the store prop.</p>
        <p>4: a component can subscribe to the store using the useSelector hook.</p>
        <p>5: create a dispatch function from the useDispatch hook and dispatch actions with payloads from components to update the state.</p>
    </div>
  )
}
