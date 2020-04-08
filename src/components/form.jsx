import React from "react";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
  }

  inputFieldHandeler = event => {
    this.setState({
      todoItem: event.target.value
    });
    
  };

  submitTodo = () => {
    this.props.getTodoItem(this.state.todoItem);
    this.setState({
      todoItem: ""
    });
  };

  render() {
    return (
      <div>
        <input className="input" value={this.state.todoItem} onChange={this.inputFieldHandeler}/>
        <button className="button" onClick={this.submitTodo}>Add</button>
      </div>
    );
  }
}

export default Form;
