import React, { Component } from "react";
import Heading1 from "../../heading/headings";
import ButtonComponent from "../../button/button";

class TodoComponent extends Component {
  state = {
    todos: ["Wake up at 7:00am ", "Eat breakFast at 8:00am"],
  };

  todoHandler = () => {
    this.setState({
      todos: [...this.state.todos, "Attend online class at 10am"],
    });
  };

  todoUpdateHandler = (index) => {
    console.log(index, this.state.todos);
    let newTodos = this.state.todos;
    newTodos[index] = "Wake up at 6:00am ";

    this.setState({
      todos: newTodos,
    });

    console.log(newTodos, "newTodos");
  };
  todoDeleteHandler = (index) => {
    let newTodos = this.state.todos.filter((eachTeam, i) => index != i);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <>
        <Heading1 title="List of Todos" />
        <ol>
          {this.state.todos.map((eachTodo, index) => {
            return (
              <>
                <li>{eachTodo}</li>
                <ButtonComponent
                  text={"Update"}
                  onPress={() => this.todoUpdateHandler(index)}
                />
                <ButtonComponent
                  text={"Delete"}
                  onPress={() => this.todoDeleteHandler(index)}
                />
              </>
            );
          })}
        </ol>
        <ButtonComponent text={"Add todo"} onPress={this.todoHandler} />
      </>
    );
  }
}

export default TodoComponent;
