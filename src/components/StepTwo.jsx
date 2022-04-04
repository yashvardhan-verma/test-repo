import React from "react";
import "../styles/steptwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SettingForm from "./SettingForm";
import '../styles/steptwo.css';

export default function StepTwo() {
  return (
    <div className="steptwo">
      <p className="steps">Step 2</p>
      <h2>Title</h2>
      <p>Enter your blog title or generate new title ideas</p>
      <textarea placeholder="Enter your blog title ..." rows="5"></textarea>
      <button>
        <FontAwesomeIcon icon={faSliders} />
        Advanced AI settings
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <div className="additional-setting">
        <SettingForm />
      </div>
    </div>
  );
}
