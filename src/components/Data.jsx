import React, { Component } from "react";
class Data extends Component {
  state = {};
  render() {
    return (
      <div>
        <label> Name</label>
        <input
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Data;
