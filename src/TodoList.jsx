/* eslint-disable react/prop-types */

import { ToDoItem } from "./ToDoItem";

// eslint-disable-next-line react/prop-types
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
