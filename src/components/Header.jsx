import React from 'react'
import Button from './Button'
import './styles/header.css'

const Header = props => (
  <header>
    <Button to='/scroll?to=profile' selected={props.selected === '/'}>
      Mon profil
    </Button>
    <Button to='/scroll?to=experiences' selected={props.selected === '/experiences'}>
      Expériences
    </Button>
    <Button to='/scroll?to=abilities' selected={props.selected === '/abilities'}>
      Compétences
    </Button>
    <Button to='/scroll?to=projects' selected={props.selected === '/projects'}>
      Projets
    </Button>
    <Button to='/scroll?to=contact' selected={props.selected === '/contact'}>
      Contact
    </Button>
  </header>
)

export default Header
