import React from 'react'
import { Container } from 'react-bootstrap'

import Gallery from '../components/Gallery'


function GalleryScreen({idCategory}) {  

  return (
    <Gallery idCategory={idCategory}></Gallery>
  )
}

export default GalleryScreen
