import React from 'react'
import star from '../images/Star-1.png'
import ellipse from '../images/Ellipse.png'

export default function Items(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
         <section className="card">
            <img src={props.image} alt="" className='card--image' />
            <section className='card--stats'>
                <img src={star} alt="" className='card--star'/>
                <span>{props.rating}</span>
                <span>({props.reviewCount})</span>
                <p className='country'><img src={ellipse} alt="ellpse" />{props.location}</p>
            </section>
            <p className='card--title'>{props.title}</p>
            <p><b className='card--price'>From ${props.price} </b> / person</p>
            {badgeText && <p className='card--badge'>{badgeText}</p>}
        </section>       
    )
}
