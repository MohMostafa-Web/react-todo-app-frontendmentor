import { useState } from "react";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
import Copyright from "./components/Copyright/Copyright";
import "./App.css";

let savedList = [];
if (localStorage.getItem("todos-list")) {
  savedList = JSON.parse(localStorage.getItem("todos-list"));
  // console.log(savedList); // debug
}

let savedTheme = "";
if (localStorage.getItem("mode-theme")) {
  savedTheme = localStorage.getItem("mode-theme");
  // console.log(savedTheme); // debug
}

function App() {
  const [mode, setMode] = useState(savedTheme || "light");
  const [list, setList] = useState(savedList);

  return (
    <section className={`todo-app ${mode}`}>
      <div className="container">
        <Header mode={mode} setMode={setMode} />
        <InputField list={list} setList={setList} />
        <TodoList list={list} setList={setList} />
        <Copyright />
      </div>
    </section>
  );
}

export default App;
