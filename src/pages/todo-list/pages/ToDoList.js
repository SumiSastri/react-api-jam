import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = ({ todos }) => {
  const cardComponent = todos.map((todo, i) => {
    return (
      <ToDoCard
        key={i}
        title={todos[i].title}
        id={todos[i].id}
        userId={todos[i].userId}
        completed={todos[i].completed}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default ToDoList;
