import React from 'react'
import Button from './Button'

import './styles/header.css'

const Header = props => (
    <header>
        <Button selected={props.selected === 'profile'} onClick={() => props.onChange('profile')}>
            Mon profil
        </Button>
        <Button selected={props.selected === 'experiences'} onClick={() => props.onChange('experiences')}>
            Expériences
        </Button>
        <Button selected={props.selected === 'abilities'} onClick={() => props.onChange('abilities')}>
            Compétences
        </Button>
        <Button selected={props.selected === 'projects'} onClick={() => props.onChange('projects')}>
            Projets
        </Button>
        <Button selected={props.selected === 'contact'} onClick={() => props.onChange('contact')}>
            Contact
        </Button >
    </header>)

export default Header
