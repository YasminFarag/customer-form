import React, { Component } from "react";

class Gender extends Component {
  render() {
    return (
      <div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value={this.props.gender}
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Male
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value={this.props.gender}
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Female
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value={this.props.gender}
          />
          <label class="form-check-label" for="inlineCheckbox3">
            Other
          </label>
        </div>
      </div>
    );
  }
}

export default Gender;
