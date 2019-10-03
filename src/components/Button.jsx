import React from 'react'
import { Button as AntButton } from 'antd'
import './styles/button.css'

const Button = props => (<AntButton className={props.selected ? 'selected' : ''} type='primary'>{props.children}</AntButton>)
export default Button
