import React from 'react'
import Banner from './Banner'
import Code from './Code'

export default function Context() {
  return (
    <div>
        <Banner heading='Context'/>
        <p>Using context in React is a way to manage app-wide state. All components that are provided with context have direct access to state stored inside of it so there is no need to pass state from one component to another. This solves the major problem of using useState when dealing with more complex state management.</p>
        <h3>Creating Context</h3>
        <p>Firstly, we need to create and export a context using the createContext hook which can be imported from 'react'.</p>
        <Code code={"//App.jsx\nimport { createContext } from 'react';\nexport const TodoContext = createContext();"}/>
        <p>Now we can wrap the context around the components that need access to it, and give it a 'value' prop which contains the state. In this case we've provided it a <Code code={'contextValue'} display='inline'/> which will hold an array of todos that we get from useState, the <Code code={'removeTodo()'} display='inline'/> function to remove a todo, and the <Code code={'checkTodo()'} display='inline'/> that toggles a todo's isChecked value. If a wrapped component has nested components, they too will have access to the context (like out Todo component).</p>
        <Code code={"//App.jsx\nconst contextValue = {\n    todos: [...todos],\n    removeTodo(id) {\n        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));\n},\n    checkTodo(id){\n        const newTodos = [...todos]\n        const index = todos.findIndex(todo => todo.id === id)\n        newTodos.at(index).isChecked = !newTodos.at(index).isChecked\n        setTodos(newTodos)\n    },\n};\n\n//Wrap the context provider around the TodoList component.\n<TodoContext.Provider value={contextValue}>\n    <TodoList />\n</TodoContext.Provider>"}/>
        <h3>Accessing Context in Components</h3>
        <p>If we want to access the stored state, we need to use the useContext hook inside a component which can be imported from 'react'.</p>
        <Code code={'import { useContext } from "react";'}/>
        <p>The useContext hook returns the state we've provided as a 'value' prop in the App component. We can now iterate over stored todos.</p>
        <Code  code={'//TodoList.jsx\nconst context = useContext(TodoContext);\n\n{context.todos && context.todos.map(todo => (\n    <Todo id={todo.id} todo={todo.todo} key={todo.id} isChecked={todo.isChecked}  />\n))};'}/>
        <p>Even the nested Todo component has access to the same state and the functions it needs.</p>
        <Code code={'//Todo.jsx\nimport { useContext } from "react";\n\nconst context = useContext(TodoContext)\n\nfunction handleRemove(){\n    context.removeTodo(id)\n}\n\nfunction handleCheckTodo(){\n    context.checkTodo(id)\n}'}/>
        <h3>TL;DR</h3>
        <p>1: create contexts with createContext hook.</p>
        <Code code={"//App.jsx\nimport { createContext } from 'react';\nexport const TodoContext = createContext();"}/>
        <p>2: wrap the Context.Provider around all components that need access to the state, give it the 'value' prop that holds the initial state.</p>
        <Code code={"//App.jsx\n<TodoContext.Provider value={contextValue}>\n    <TodoList />\n</TodoContext.Provider>"}/>
        <p>3: use the context in components with useContext hook.</p>
        <Code code={"//Todo.jsx\nconst context = useContext(TodoContext)"}/>
        <p>We can create multiple contexts and provide them to different components. One thing to note is that the React team only reccomends using context for low-frequency updates (themes, shopping carts etc.)</p>
    </div>
)}
