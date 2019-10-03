import React from 'react'
import './styles/button.css'

const Button = props => (
    <button
        className={props.selected ? 'selected' : ''}
        type='primary'
    >
        {props.children}
    </button>)
export default Button
