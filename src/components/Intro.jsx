import React from 'react'
import Group from '../images/Group-77.png'

export default function Intro(){
    return (
        <section className="hero">
            <img src={Group} alt="A group of beautiful clients" className='hero--photo' />
            <h2 className='hero--header'>Online Experiences</h2>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}