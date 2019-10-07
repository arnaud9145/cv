import React from 'react'
import './styles/projects.css'
import Project from './Project'
import tv from '../assets/tv.png'

const projects = [
  { link: 'https://github.com/ungdev/UA-api', name: 'Api UA' },
  { link: 'https://github.com/ungdev/etuutt', name: 'Site étudiant', goTo: 'https://etu.utt.fr' },
  { link: 'https://github.com/ungdev/UA-front', name: 'Site UTT Arena', goTo: 'https://arena.utt.fr' },
  { link: 'https://github.com/ungdev/UA-api', name: 'UA-api' },
  {
    link: 'https://github.com/ungdev/api.gala.uttnetgroup.fr',
    name: 'Api Gala'
  },
  { link: 'https://github.com/ungdev/TV-Front', name: 'Télé Gala', image: tv },
  { link: 'https://github.com/ungdev/UA-api', name: 'UA-api' }
]
const Projects = () => (
  <div className='projects' id='projects'>
    <h1>Projets</h1>
    <div className='projects'>
      <h2>UTT Arena</h2>
      <div className='list'>
        {projects.map((item, index) => (
          <Project key={index} project={item} />
        ))}
      </div>
    </div>
  </div>
)

export default Projects
