import React from 'react'
import Card from '../Card/Card'
import './Ideas.css'

const Ideas = ({response}) => {

const ideaCards = response.map(idea => {
  return(
    <Card
      facts={response}
      id={Date.now()}
      key={response.id}
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
