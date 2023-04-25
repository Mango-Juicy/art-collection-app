import React from 'react'
import { Container } from 'react-bootstrap'

import Gallery from '../components/Gallery'
import Story from '../components/Story'


function StoryScreen({idCategory}) {  

  return (
    <Story idCategory={idCategory}></Story>
  )
}

export default StoryScreen
