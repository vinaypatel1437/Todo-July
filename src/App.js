import React, { Component } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      todos: [
        {
          id: 1,
          name: "Todo1",
          description: "You have to do Todo1",
          status: "In progress",
        },
        {
          id: 2,
          name: "Todo2",
          description: "You have to do Todo2",
          status: "Done",
        },
        {
          id: 3,
          name: "Todo3",
          description: "You have to do Todo3",
          status: "In progress",
        },
        {
          id: 4,
          name: "Todo4",
          description: "You have to do Todo4",
          status: "Todo",
        },
      ],
      currentEditModal: {},
    };
  }
  changeModalStatus = (status, id) => {
    this.setState({
      modalStatus: status,
      currentEditModal: this.state.todos.filter((ele) => ele.id === id)[0],
    })
  }
  createTodo = (name, description, status) => {
    this.state.todos.push({
      id: Date.now(),
      name: name,
      description: description,
      status: status,
    })
    this.setState({ todos: this.state.todos, modalStatus: false });
  }
  updateTodo = (name, description, status, id) =>  {
    const tempTodo = this.state.todos.map((ele) => {
      if (ele.id === id) {
        return {
          id,
          name,
          status,
          description,
        }
      }
      return ele;
    })
    this.setState({
      todos: tempTodo
    });
  }
  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((ele) => ele.id !== id) });
  }
  render() {
    return (
      <div className="App">
        <Header changeStatus={this.changeModalStatus}/>
        <MainPage todos={this.state.todos} deleteTodo={this.deleteTodo} changeStatus={this.changeModalStatus}/>
        {this.state.modalStatus && (
          <div className="modal">
            <AddTodo changeStatus={this.changeModalStatus} createTodo={this.createTodo} currentEditTodo={this.state.currentEditModal} updateTodo={this.updateTodo}/>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
