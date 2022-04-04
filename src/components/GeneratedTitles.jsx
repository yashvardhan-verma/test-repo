import React from 'react';
import '../styles/generatetitles.css';

export default function GenerateTitles () {
  return (
      <div className="solutions">
          <div className="output-select">
              <button className='active'>AI Generated Titles</button>
              <button>Top Ranked Titles</button>
          </div>
          <div className="generated-solutions">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora.</p>
          </div>
          <div className="extra-buttons">
              <button>Generate More</button>
          </div>
      </div>
  )
}