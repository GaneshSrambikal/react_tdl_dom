import React, { Component } from "react";

export default class AddList extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  handleText = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="add task "
          value={this.state.title}
          onChange={this.handleText}
          style={textBoxStyle}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={buttonStyle}
        />
      </form>
    );
  }
}
const textBoxStyle = {
  flex: "10",
  padding: "7px 20px",
  textTransform: "uppercase"
};
const buttonStyle = {
  flex: "1",
  display: "inline-block",
  color: "#fff",
  padding: "7px 20px",
  border: "none",
  cursor: "pointer",
  textTransform: "Capitalize"
};
