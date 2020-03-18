import React, { Component } from "react";
import "./App.css";
import Gender from "./components/Gender";
import Sellect from "./components/Sellect";

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
    /* if (this.state.user.gender.length === -) {
      alert("vfd");
    } */
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => {
        return {
          user: {
            ...prevState.newUser,
            [name]: value
          }
        };
      },
      () => console.log(this.state.user)
    );
  };
  handleSubmit = e => {
    //e.preventDefault();

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
            /* placeholder={"Select Gender"} */
            handleChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default App;
