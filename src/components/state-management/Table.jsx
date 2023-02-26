import React from "react";
import './Table.css'

export default function Table() {
  return (
    <div className="comparison-table">
      <table>
        <tr>
          <th></th>
          <th>Pros</th>
          <th>Cons</th>
        </tr>
        <tr>
          <td>useState</td>
          <td>
            <ul>
                <li>Easy to use</li>
                <li>Great for simple component-wide state</li>
            </ul>
        </td>
          <td>
            <ul>
                <li>Not great with deeply nested components</li>
                <li>Passing props through components that don't need the state</li>
                <li>Can lead to lifting state up to components that have nothing to do with the state</li>
            </ul>
          </td>
          <td>
            <a href="https://github.com/aljaz-ferenc/state-management/tree/master/todo-useState">View code</a>
          </td>
        </tr>
        <tr>
          <td>Context</td>
          <td>
            <ul>
                <li>Great for app-wide state</li>
                <li>Components have direct access to the state</li>
                <li>No third-party libraries</li>
            </ul>
          </td>
          <td>
            <ul>
                <li>Not great for high-frequency state updates</li>
            </ul>
          </td>
          <td>
            <a href="https://github.com/aljaz-ferenc/state-management/tree/master/todo-useContext">View code</a>
          </td>
        </tr>
        <tr>
          <td>Redux Toolkit</td>
          <td>
            <ul>
                <li>Great for complex state management in larger apps</li>
                <li>Easy updating from any component</li>
                <li>Can manage high-frequency updates</li>
            </ul>
          </td>
          <td>
            <ul>
                <li>More complex setup</li>
                <li>Bulkier build</li>
                <li>Overkill for small and simple apps</li>
            </ul>
          </td>
          <td>
            <a href="https://github.com/aljaz-ferenc/state-management/tree/master/ReduxToolkit">View code</a>
          </td>
        </tr>
      </table>
    </div>
  );
}
