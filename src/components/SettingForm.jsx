import React from "react";
import "../styles/settingform.css";

class SettingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Additional Keywords :
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div id="creativity">
          Creativity
          <input
            label="Low"
            type="radio"
            name="creativity"
            value="low"
            checked
          />
          <input
            label="Medium"
            type="radio"
            name="creativity"
            value="medium"
          />
          <input
            label="High"
            type="radio"
            name="creativity"
            value="high"
          />
        </div>
        <div>
          <label>
            Tone of the content
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="default">Please Select</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SettingForm;
