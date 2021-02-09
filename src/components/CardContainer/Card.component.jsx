import React from 'react'
import './card.style.css'
const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.id}?set=set2&180/180`} alt='' />
      <h2>{props.monsters}</h2>
      <p>{props.email}</p>
    </div>
  )
}

export default Card
