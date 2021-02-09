import React from 'react'
import Card from '../CardContainer/Card.component'
import './cardList.style.css'
const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monesters.map((data) => (
        <Card
          monsters={data.name}
          key={data.id}
          id={data.id}
          email={data.email}
        />
      ))}
    </div>
  )
}

export default CardList
