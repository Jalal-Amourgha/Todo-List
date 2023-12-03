import React, { useEffect, useState, useRef } from "react";
import Todoitems from "./Todoitems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      add();
    }
  };

  const add = () => {
    if (inputRef.current.value !== "") {
      setTodos([
        ...todos,
        { no: count++, text: inputRef.current.value, display: "" },
      ]);
    } else {
      alert("You Must Add The Task ");
    }

    inputRef.current.value = "";
    localStorage.setItem("todos-count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos-count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <h1>To-Do List</h1>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder=" Add Your Task "
          onKeyDown={handleEnterKeyPress}
        />
        <button
          onClick={() => {
            add();
          }}
        >
          Add
        </button>
      </div>
      <div className="todo-list">
        {todos.map((item, i) => {
          return (
            <Todoitems
              key={i}
              setTodos={setTodos}
              no={item.no}
              display={item.display}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
