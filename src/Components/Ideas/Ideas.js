import React from 'react'
import Card from '../Card/Card'
// import { prompt, responses } from '../Form/Form'
import './Ideas.css'

const Ideas = ( {responses} ) => {

const ideaCards = responses.map(idea => {
  return(
    <Card
      prompt={idea.prompt}
      facts={idea.response}
      id={idea.id}
      key={idea.id}
    />
  )
})

  return (
    <div className='ideas-container'>
    {ideaCards}</div>
  )
}

export default Ideas;
