import React, { Component } from "react";
import "./App.css";
import Gender from "./components/Gender";
import Sellect from "./components/Sellect";
import Data from "./components/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        gender: "",
        mail: ""
      },
      formErrors: {},

      genderOptions: ["Male", "Female", "Others"]
    };
  }

  handleFormValidation = () => {
    const { name, email, gender } = this.state.user;
    let formErrors = {};
    let formIsValid = true;

    if (gender === "") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }
  };

  handleInput = e => {
    if (this.state.user.gender === "") {
      alert("vfd");
    }
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      };
    });
  };

  handleFullName = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      user: { ...prevState.user, name: value }
    }));
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Customer Form</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <Gender gender={this.state.gender} /> */}
          <Sellect
            title={"Gender"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.user.gender}
            placeholder={"Select Gender"}
            handleChange={this.handleInput}
          />
          <Data
            type={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.user.name}
            placeholder={"Enter your name"}
            handleChange={this.handleFullName}
          />
        </form>
      </div>
    );
  }
}

export default App;
