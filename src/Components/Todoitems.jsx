import React from "react";

const Todoitems = ({ no, display, text, setTodos }) => {
  const remove = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));

    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }

    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div className="paraghraph-box">
        <i
          className={`${
            display === "" ? "fa-regular" : "fa-solid"
          } fa-square-check`}
          onClick={() => toggle(no)}
        ></i>

        <p className={`${display}`}>{text}</p>
      </div>
      <div className="icon-box">
        <i className="fa-solid fa-square-xmark" onClick={() => remove(no)}></i>
      </div>
    </div>
  );
};

export default Todoitems;
