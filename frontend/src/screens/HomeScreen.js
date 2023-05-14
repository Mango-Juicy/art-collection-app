import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomeScreen({categories}) {  

  const colWMedLeft = {span: 4, offset: 2}
  const colWMedRight = {span: 4, offset: 0}
  const colWFull = {span: 8, offset: 2}

  //Configuration: homeImage, idButtonCategories
  const homeImage = './1986-Autoritratto-con-uccelli.jpg'
  const idButtonCategories = [1,4,6,9]
  const buttonCategories = categories.filter(category => idButtonCategories.includes(category.id))

  const buttonGroup = () => {
    return(
      buttonCategories.map((category, index) => (
        <Link key={index} style={{ textDecoration: 'none' }} to={category.url}>
          <Button 
            as="h5"
            className='btn-block btn-primary w-100 my-3 py-2'                  
            type='button'               
          >{category.label}
          </Button> 
        </Link>
      ))
    )
  }

  return (
    <div className='p-2'>
      <Card className="bg-transparent border-0 my-2"  >
        <Row className='align-items-center'>

          <Col sm={colWFull} md={colWMedLeft} lg={colWMedLeft} xl={colWMedLeft}>
            <Card.Img className="border-0" src={homeImage}  /> 
          </Col>

          <Col sm={colWFull} md={colWMedRight} lg={colWMedRight} xl={colWMedRight}>
            {buttonGroup()}
          </Col>

        </Row>  
      </Card>
    </div>
  )
}

export default HomeScreen
