import React from "react";
import "./list.css";

class List extends React.Component {

  deleteTodoTask = (element, event) => {
    this.props.deleteTodo(element);
  };
  render() {
    let list =
      this.props.todoList.length !== 0
        ? this.props.todoList.map((element, index) => (
            <li className="list" key={index}>
              <span>{element}</span>
              <button onClick={this.deleteTodoTask.bind(this.event, element)}>
                Delete
              </button>
            </li>
          ))
        : "";
    return (
      <>
        <ul>{list}</ul>
      </>
    );
  }
}
export default List;
