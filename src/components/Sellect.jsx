import React, { Component } from "react";
class Select extends Component {
  state = {};
  render() {
    return (
      <div className="form-group">
        <label> Gender </label>
        <select
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        >
          <option value="" disabled>
            {this.props.placeholder}
          </option>
          {this.props.genderOptions.map(gender => {
            return (
              <option key={gender} value={gender} label={gender} required>
                {gender}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Select;
