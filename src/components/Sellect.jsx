import React, { Component } from 'react';
class  extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group">
      <label> Gender </label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        required
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option} required>
              {option}
            </option>
          );
        })}
      </select>
    </div>
         );
    }
}
 
export default ;