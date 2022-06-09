import { useRef } from "react";
import CheckIcon from "./../../icon-check.svg";
import CrossIcon from "./../../icon-cross.svg";

const RenderList = ({
  removeTodo,
  markCompleted,
  markActive,
  filter,
  list,
  setList,
}) => {
  /* Create variables to save index */
  const draggedItemIndex = useRef();
  const dropTargetItemIndex = useRef();

  /* Create function to handle mark */
  const handleMark = (status, id) => {
    if (status === "active") markCompleted(id);
    if (status === "completed") markActive(id);
  };

  /* Create function to handle dragStart */
  const handleDragStart = (e, i) => {
    // console.log(e.target.textContent); // debug
    draggedItemIndex.current = i; // Save index of dragged item in useRef Variable "draggedItemIndex"
    e.dataTransfer.effectAllowed = "move"; // Make drag effect "move"
  };

  /* Create function to handle dragOver */
  const handleDragOver = (e, i) => {
    e.preventDefault(); // to allow drop elements in others 
    e.dataTransfer.dropEffect = "move"; // Make drop effect "move"
  };

  /* Create function to handle drop */
  const handleDrop = (e, i) => {
    // console.log(e.currentTarget.textContent); // debug
    dropTargetItemIndex.current = i; // Save index of dropTarget item in useRef Variable "dropTargetItemIndex"

    const copyList = [...list]; // Make a copy of list
    const draggedItem = copyList[draggedItemIndex.current]; // Get value of dragged Item, and save in variable "draggedItem"
    // console.log(draggedItem); // debug

    copyList.splice(draggedItemIndex.current, 1); // remove value of dragged Item from old index
    copyList.splice(dropTargetItemIndex.current, 0, draggedItem); // add value of dragged Item in new index

    /* Empty index variables */
    draggedItemIndex.current = null;
    dropTargetItemIndex.current = null;

    setList(copyList); // update list
  };

  return (
    <>
      {list.length !== 0 &&
        list.map((todo, index) => {
          const { id, status, title } = todo;

          return (
            // Single Todo
            <li
              key={id}
              id={id}
              className={`todo ${status} ${
                filter !== "all" && filter !== status && "hidden"
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              <span className="icon" onClick={() => handleMark(status, id)}>
                <img className="check" src={CheckIcon} alt="icon-check" />
              </span>
              <p onClick={handleMark} draggable="false">{title}</p>
              <img
                className="delete"
                src={CrossIcon}
                alt="icon-cross"
                onClick={() => removeTodo(id)}
              />
            </li>
          );
        })}
    </>
  );
};

export default RenderList;
