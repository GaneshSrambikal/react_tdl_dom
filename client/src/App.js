import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddList from "./components/AddList";
import About from './components/pages/About'
import uuid from "uuid";
class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "pani puri",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "interview",
        completed: false
      }
    ]
  };
  //addTodo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  //chcekbox
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  //delete task
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddList addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route
            path="/about" component={About}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
