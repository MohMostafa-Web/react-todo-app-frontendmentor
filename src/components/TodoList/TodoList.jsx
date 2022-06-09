import React, { useState, useEffect } from "react";
import Controls from "../Controls/Controls";
import RenderList from "../RenderList/RenderList";
import "./TodoList.css";

const TodoList = ({ list, setList }) => {
  const [filter, setFilter] = useState("all");
  const [leftItemsNumber, setLeftItemsNumber] = useState(0);

  /* Create function to remove todo */
  const removeTodo = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  /* Create function to clear all completed todos */
  const clearCompleted = () => {
    setList(list.filter((todo) => todo.status === "active"));
  };

  /* Create function to mark todo as completed */
  const markCompleted = (id) => {
    setList(
      list.map((todo) => {
        if (todo.id === id) {
          todo.status = "completed";
        }
        return todo;
      })
    );
  };

  /* Create function to mark todo as active */
  const markActive = (id) => {
    setList(
      list.map((todo) => {
        if (todo.id === id) {
          todo.status = "active";
        }
        return todo;
      })
    );
  };

  /* Count left Items Number */
  const countLeftItems = () => {
    setLeftItemsNumber(list.filter((todo) => todo.status === "active").length);
  };

  /* using useEffect() to update "LeftItemsNumber" & item "todos-list" in local storage if state "list" changed */
  useEffect(() => {
    countLeftItems();
    list && localStorage.setItem("todos-list", JSON.stringify(list));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <>
      <div className="todo-list">
        {/* List */}
        <ul>
          <RenderList
            removeTodo={removeTodo}
            markCompleted={markCompleted}
            markActive={markActive}
            filter={filter}
            list={list}
            setList={setList}
          />
        </ul>
        {/* Controls */}
        <Controls
          leftItemsNumber={leftItemsNumber}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
      {/* Note */}
      <div className="note">Drag and drop to reorder list</div>
    </>
  );
};

export default TodoList;
