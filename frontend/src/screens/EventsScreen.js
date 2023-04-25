import React from 'react'
import { Container } from 'react-bootstrap'

import Gallery from '../components/Gallery'
import Story from '../components/Story'


function EventsScreen({idCategory}) {  

  return (
    <Story idCategory={idCategory}></Story>
  )
}

export default EventsScreen
