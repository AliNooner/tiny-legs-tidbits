import React from 'react'
import './Card.css'
const Card = ({prompt, facts}) => {

  return(
    <div className='card'>
      <h3>{prompt}</h3>
      <h3>{facts}</h3>
      {console.log(prompt, 'pr')}
      {console.log(facts, 'fc')}
    </div>
  )
}

export default Card;
