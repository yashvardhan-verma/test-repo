import React from "react";
import "../styles/steptwo.css";

import SettingForm from "./SettingForm";
import '../styles/steptwo.css';

export default function StepTwo() {
  return (
    <div className="steptwo">
      <p className="steps">Step 2</p>
      <h2>Title</h2>
      <p>Enter your blog title or generate new title ideas</p>
      <textarea placeholder="Enter your blog title ..." rows="5"></textarea>
      <div className="additional-setting">
        <SettingForm />
      </div>
    </div>
  );
}
