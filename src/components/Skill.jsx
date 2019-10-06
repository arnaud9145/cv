import React from 'react'
import './styles/abilities.css'
import { Rate } from 'antd'

const Skill = ({ stars, children }) => (
  <div className='skill'>
    <span>{children}</span>
    <Rate disabled defaultValue={stars} />
  </div>
)
export default Skill
