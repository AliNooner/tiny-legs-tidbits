import React from 'react'
import Card from '../Card/Card'
import './Ideas.css'

const Ideas = ({responseFacts}) => {

const ideaCards = responseFacts.map(idea => {
  return(
    <Card
      facts={responseFacts}
      id={Date.now()}
      key={responseFacts.id}
    />
  )
})

  return (
    <div className='ideas-container'>
      <h2>{ideaCards}</h2>
    </div>
  )
}

export default Ideas;
