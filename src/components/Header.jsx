import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = props => (
    <header>
        <Button selected={props.selected === 'profile'}>
            <Link to='/'>
                Mon profil
            </Link>
        </Button>
        <Button selected={props.selected === 'experiences'}>
            <Link to='/experiences'>
                Expériences
            </Link>
        </Button>
        <Button selected={props.selected === 'abilities'}>
            <Link to='/abilities'>
                Compétences
            </Link>
        </Button>
        <Button selected={props.selected === 'projects'}>
            <Link to='/projects'>
                Projets
            </Link>
        </Button>
        <Button selected={props.selected === 'contact'}>
            <Link to='/contact'>
                Contact
            </Link>
        </Button >
    </header>)

export default Header
