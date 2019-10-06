import React from 'react'
import './styles/contact.css'
import { Icon } from 'antd'

const Contact = () => (
  <div className='contact' id='contact'>
    <h1>Contact</h1>
    <div className='links'>
      <a href='https://linkedin.com/in/arnaud-dufour'>
        <Icon type='linkedin' theme='filled' style={{ color: '#2877b5' }} />
        <span className='a-text'>linkedin.com/in/arnaud-dufour</span>
      </a>
      <a href='https://github.com/arnaud9145'>
        <Icon type='github' style={{ color: '#822BA5' }} />
        <span className='a-text'>github.com/arnaud9145</span>
      </a>
      <a href='mailto:arnaud.dufour10@gmail.com'>
        <Icon type='mail' theme='filled' style={{ color: 'white' }} />
        <span className='a-text'>arnaud.dufour10@gmail.com</span>
      </a>
      <a href='tel:+33670499238'>
        <Icon type='phone' theme='filled' style={{ color: 'white' }} />
        <span className='a-text'>+33 6 70 49 92 38</span>
      </a>
    </div>
  </div>
)

export default Contact
