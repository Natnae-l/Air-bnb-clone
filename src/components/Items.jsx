import React from 'react'
import star from '../images/star-1.png'
import sample from '../images/wedding-photography.jpg'
import ellipse from '../images/Ellipse.png'

export default function Items(){
    return (
         <section className="card">
            <img src={sample} alt="" className='card--image'/>
            <section className='card--stats'>
                <img src={star} alt="" className='card--star'/>
                <span>4.8</span>
                <span>(6)</span>
                <p className='country'><img src={ellipse} alt="ellpse" />Ethiopia</p>
            </section>
            <p className='card--title'>Learn wedding photography</p>
            <p><b className='card--price'>From $136 </b> / person</p>
            <p className='card--badge'>Sold out</p>
        </section>       
    )
}
