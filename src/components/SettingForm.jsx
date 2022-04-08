import React from "react";
import "../styles/settingform.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faChevronUp } from "@fortawesome/free-solid-svg-icons";


class SettingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  handleClick() {
    const aiSettingButton = document.getElementById('ai-setting-form');
    if (aiSettingButton.style.display === 'none'){
      aiSettingButton.style.display = "block";
    }else{
      aiSettingButton.style.display = "none";
    }
  }

  render() {
    return (
      
      <>
        <button onClick={this.handleClick}>
          <FontAwesomeIcon icon={faSliders} />
          Advanced AI settings
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <form onSubmit={this.handleSubmit} id="ai-setting-form">
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
          <input id="submit" type="submit" value="Generate Again &rarr;" />
        </form>
      </>
    );
  }
}

export default SettingForm;
