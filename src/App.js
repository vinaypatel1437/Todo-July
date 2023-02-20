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
    };
  }
  changeModalStatus = (status) => {
    this.setState({
      modalStatus: status,
    })
  }
  render() {
    return (
      <div className="App">
        <Header changeStatus={this.changeModalStatus}/>
        <MainPage />
        {this.state.modalStatus && (
          <div className="modal">
            <AddTodo changeStatus={this.changeModalStatus} />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
