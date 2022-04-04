import React from 'react';
import GenerateTitles from './GeneratedTitles';
import StepTwo from './StepTwo';
import '../styles/form.css';

export default function Form () {
  return (
    <div className='container'>
      <StepTwo />
      <GenerateTitles />
    </div>
  );
}