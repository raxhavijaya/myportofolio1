import React from 'react'
import html from '../assets/experience/html.png'
import css from '../assets/experience/css.png'
import javascript from '../assets/experience/javascript.png'
import reactImage from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import github from '../assets/experience/github.png'

const Experience = () => {
  return (
    <div name='experience'>
      <div>
        <div>
          <p>Experience</p>
          <p>These are the technologies I've worked with</p>
        </div>
        <div>
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience