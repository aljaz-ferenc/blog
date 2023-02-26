import React from "react";
import Banner from "./Banner";
import Code from "./Code";

export default function UseState() {
  return (
    <div>
      <Banner heading="useState" />
      <p>
        Using the useState hook is the easiest way to manage simple state and is
        best suited for component-wide state management.
      </p>
      <p>
        All we need to do is import the useState hook, which will provide us
        with a constant that holds the current state and a function that is used
        to update the state. The two returned values are extracted by using
        array destructuring. We can pass an initial value as a parameter to the
        hook (an empty array in our case, since new todos will be added as
        objects).
      </p>
      <Code code={'//App.jsx\nimport { useState } from "react";'} />
      <Code code={"//App.jsx\nconst [todos, setTodos] = useState([]);"} />
      <p>
        Let's add another useState hook that will track the input value which
        can then be used to add a todo and clear the input field.
      </p>
      <Code code={"//App.jsx\nconst [input, setInput] = useState('')"} />
      <p>
        Now we create a <Code code={"handleSubmit()"} display={"inline"} />{" "}
        function that will update the todos once the form is submitted. This
        function calls <Code code={"setInput('')"} display="inline" /> that
        takes a new state as a parameter and updates the state to an empty
        string. The input is cleared.
      </p>
      <p>
        At the same time we call <Code code={"setTodos()"} display="inline" />{" "}
        which takes an arrow function with previous state as an argument
        (prevTodos), and returns a new array by copying previous todos and
        adding a new todo object, which contains the todo, id and isChecked
        keys.
      </p>
      <Code
        code={
          "//App.jsx\nfunction handleSubmit(e){\n    e.preventDefault()\n    setInput('')\n    setTodos(prevTodos => [...prevTodos, {\n        todo: inputRef.current.value,\n        id: Math.random(),\n        isChecked: false\n    }])\n}"
        }
      />
      <p>
        NOTE: If we are updating the state to a completely new value, we can
        pass the value in the updating function directly as a parameter. In our
        case the empty string in <Code code={"setInput('')"} display="inline" />{" "}
        became the new state.
      </p>
      <p>
        But if the new state is dependent on previous state (in case of adding
        todos, increasing a counter etc.) we must update the state by calling a
        function and mutating the previous state (like we did in{" "}
        <Code code={"setTodos()"} display="inline" />
        ). This way React guarantees the we get the latest state snapshot. Never
        mutate the current state directly!
      </p>
      <p>
        We have successfully updated the two states, which can now be passed
        down to child components via props.
      </p>
      <h3>Updating State From Child Components</h3>
      <p>
        Passing props is only possible from parent to child components. But
        let's say we want to delete a todo but the button lives in the Todo
        component. So how can we change the state in a parent component from a
        child component?
      </p>
      <p>
        Basically, we can define a state updating function in the parent, send
        it down via props to TodoList...
      </p>
      <Code
        code={
          "//App.jsx\nfunction handleRemoveTodo(id){\n    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))\n}"
        }
      />
      <p>...send it down via props to TodoList...</p>
      <Code
        code={
          "//App.jsx\n<TodoList todos={todos} handleRemove={handleRemoveTodo} handleCheck={handleCheckTodo} />"
        }
      />
      <p>...send it down to Todo...</p>
      <Code
        code={
          "//TodoList.jsx\n{todos.map(todo => <Todo handleRemove={handleRemove}/>)}"
        }
      />
      <p>...and call it on click from the child component.</p>
      <Code
        code={
          "//Todo.jsx\nfunction handleRemoveTodo(){\n    handleRemove(id)\n}"
        }
      />
      <h3>TL;DR</h3>
      <p>
        1: the useState hook returns a current state and an updating function.
        It receives the initial state as the argument.
      </p>
      <Code code={"const [state, setState] = useState(initialState)"} />
      <p>
        2: use the updating function to update the state by passing the new
        state as an argument.
      </p>
      <Code code={"setState(newState)"} />
      <p>
        3: to update the state from a child component pass the updating function
        down and call it in the child component.
      </p>
      <h3>Problems with useState</h3>
      <p>
        As we can see using the useState hook is great for simple component-wide
        state management. But as soon as state becomes more complex or we need
        to update it from other components that might be deeply nested or are on
        the same level of nesting (sibling components), things can get pretty
        messy. It is not ideal to pass props through multiple components that
        might not even need the state we are passing down to deeply nested
        components or we might have to start dealing with lifting the state up
        and might end up with storing state in illogical places. All this can
        lead to bloated and unreadable code.
      </p>
      <p>
        But there are solutions for this problem, one of which is Context, which
        we will look at next.
      </p>
    </div>
  );
}
