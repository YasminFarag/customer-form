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

      genderOptions: ["Male", "Female", "Others"]
    };
  }

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => {
        return {
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        };
      },
      () => console.log(this.state.newUser)
    );
  };

  render() {
    return (
      <div className="App">
        <h2>Customer Form</h2>
        <Gender gender={this.state.gender} />
        <Sellect
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.gender}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
