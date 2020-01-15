import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      padding: "10px",
      mariginLeft :'10px'
    };
  };

  render() {
      const {id ,title ,completed}  = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={completed} 
            onChange={this.props.markComplete.bind(this , id)}
          />{" "}
          {title}
          <button style={buttonStyle} onClick={this.props.delTodo.bind(this ,id)}>x</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete : PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const buttonStyle = {
    background : '#fff',
    color:'#ff3333',
    border:'1px solid #ff3333',
    padding:'5px 9px',
    borderRadius:'50px',
    cursor:'pointer',
    float: 'right',
    marginRight : '10px'
}

export default TodoItem;
