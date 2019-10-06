import React from 'react'
import './styles/abilities.css'
import Skill from './Skill'

let skills = [
  { name: 'Javascript', stars: 5 },
  { name: 'ReactJs', stars: 5 },
  { name: 'React Native', stars: 5 },
  { name: 'Ionic (3)', stars: 4 },
  { name: 'ExpressJS', stars: 4 },
  { name: 'Java', stars: 2 },
  { name: 'Python', stars: 2 },
  { name: 'HTML (5)', stars: 5 },
  { name: 'CSS (3)', stars: 4 },
  { name: 'PHP', stars: 3 },
  { name: 'Symfony (3)', stars: 3 },
  { name: 'Laravel (5)', stars: 3 },
  { name: 'JSON', stars: 4 },
  { name: 'MySQL', stars: 3 },
  { name: 'Sails.js', stars: 1 },
  { name: 'Angular 4', stars: 2 },
  { name: 'Git', stars: 3 },
  { name: 'Méthodologie Agile', stars: 4 },
  { name: "Management d'équipe", stars: 4 },
  { name: 'Blockchain', stars: 4 }
]
let languages = [
  { name: 'Français (Langue Maternelle)', stars: 5 },
  { name: 'Anglais (C1 - BULATS)', stars: 4 },
  { name: 'Espagnol (B2)', stars: 3 },
  { name: 'Chinois', stars: 1 }
]

const starOrder = (a, b) => {
  if (a.stars > b.stars) return -1
  if (a.stars < b.stars) return 1
  return 0
}

const Abilities = () => {
  skills = skills.sort(starOrder)
  languages = languages.sort(starOrder)
  const leftSkills = skills.filter((skill, index) => index < skills.length / 2)
  const rightSkills = skills.filter(
    (skill, index) => index >= skills.length / 2
  )
  const leftLanguages = languages.filter(
    (language, index) => index < languages.length / 2
  )
  const rightLanguages = languages.filter(
    (language, index) => index >= languages.length / 2
  )
  return (
    <div className='abilities' id='abilities'>
      <h1>Compétences</h1>
      <div className='skills'>
        <h2>Développement</h2>
        <div className='left'>
          {leftSkills.map((item, index) => (
            <Skill key={index} stars={item.stars}>{item.name}</Skill>
          ))}
        </div>
        <div className='right'>
          {rightSkills.map((item, index) => (
            <Skill key={index} stars={item.stars}>{item.name}</Skill>
          ))}
        </div>
      </div>
      <div className='skills'>
        <h2>Langues</h2>
        <div className='left'>
          {leftLanguages.map((item, index) => (
            <Skill key={index} stars={item.stars}>{item.name}</Skill>
          ))}
        </div>
        <div className='right'>
          {rightLanguages.map((item, index) => (
            <Skill key={index} stars={item.stars}>{item.name}</Skill>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Abilities
