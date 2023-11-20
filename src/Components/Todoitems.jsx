import "./Css/Todoitems.css";
import x from "./Assets/x.png";

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
      <p className={`${display}`} onClick={() => toggle(no)}>
        {text}
      </p>

      <img
        className="todoitems-x-icon"
        onClick={() => remove(no)}
        src={x}
        alt=""
      />
    </div>
  );
};

export default Todoitems;
