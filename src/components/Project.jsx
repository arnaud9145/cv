import React from 'react'
import './styles/project.css'

const Project = ({ project }) => (
  <a
    className={'project'}
    href={project.link}
    type='primary'
  >
    <img src={project.image} />
    <span>{project.name}</span>
  </a>
)
export default Project
