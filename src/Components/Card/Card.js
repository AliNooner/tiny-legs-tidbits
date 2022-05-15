import React from 'react'
import './Card.css'
const Card = ({facts, id}) => {

  return(
    <div className='card'>
      <h3>{facts}</h3>
    </div>
  )
}

export default Card;
