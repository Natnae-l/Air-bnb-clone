import React from 'react'
import Airbnb from '../images/airbnb.png'

export default function Header(){
    return (
        <header>
            <nav>
                <img src={Airbnb} alt="" />               
            </nav>
        </header>
    )
}