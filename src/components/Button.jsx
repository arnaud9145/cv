import React from 'react'
import { Link } from 'react-router-dom'
import './styles/button.css'

const Button = props => (
  <Link
    className={props.selected ? 'custom-button selected' : 'custom-button'}
    to={props.to}
    type='primary'
  >
    {props.children}
  </Link>
)
export default Button
