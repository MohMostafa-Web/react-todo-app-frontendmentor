import React from "react";

const Controls = ({ leftItemsNumber, filter, setFilter, clearCompleted }) => {
  return (
    <div className="controls">
      <div className="left-items">
        <span className="number">{leftItemsNumber}</span> items left
      </div>
      <ul className="filters">
        <li
          className={filter === "all" ? "selected" : undefined}
          onClick={() => setFilter("all")}
        >
          All
        </li>
        <li
          className={filter === "active" ? "selected" : undefined}
          onClick={() => setFilter("active")}
        >
          Active
        </li>
        <li
          className={filter === "completed" ? "selected" : undefined}
          onClick={() => setFilter("completed")}
        >
          Completed
        </li>
      </ul>
      <div className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default Controls;
