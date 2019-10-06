import React from 'react'
import './styles/profile.css'
import image from '../assets/moi.jpeg'

const Profile = () => (
  <div className='profile' id='profile'>
    <img src={image} alt='' className='avatar'></img>
    <h1>Arnaud Dufour</h1>
    <h2>Développeur Web Full Stack</h2>
  </div>
)

export default Profile
