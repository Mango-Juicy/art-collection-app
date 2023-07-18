import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

class SecFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: undefined,
      yearFrom: undefined,
      yearTo: undefined
    }
  }

render() {
    const colFilterMed = {span: 6, offset: 0}
    const colFilterYearLabel = {span: 2, offset: 0}

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        this.props.submitHandler(this.state,e);
      }
    };

    const filterByYear = () => {
      return(
        <>
          <Col > 
            <Form.Control
              className='c-secondary text-white border border-primary py-0'
              type='number'
              placeholder='Da..'
              aria-describedby="basic-addon2"
              value={this.state.yearFrom}
              onChange={(e) => this.setState({yearFrom: e.target.value || undefined})}            
            >
            </Form.Control>
          </Col>
        
          <Col >   
            <Form.Control
              className='c-secondary text-white border border-primary py-0'
              type='number'
              placeholder='A..'
              aria-describedby="basic-addon2"
              value={this.state.yearTo}
              onChange={(e) => this.setState({yearTo: e.target.value || undefined})}            
            >
            </Form.Control>
          </Col>
        </>
      )
    }
    
    return (
      <Form onSubmit={(e) => this.props.submitHandler(this.state,e)} onKeyDown={(e) => handleKeyDown(this.state,e)}>
        <Row>             

          {/* SEARCH BAR */}
          <Col className='my-2' sm={{span: 12, offset: 0}} md={colFilterMed} lg={colFilterMed} xl={colFilterMed}> 
            <Form.Control
              className='c-secondary text-white border border-primary py-0 '
              type='text'
              placeholder='Cerca..'
              aria-describedby="basic-addon2"
              value={this.state.query}
              onChange={(e) => this.setState({query: e.target.value || undefined})}            
            >
            </Form.Control>
          </Col>

          {/* YEAR + SEARCH BUTTON */}
          <Col className='my-2' sm={{span: 12, offset: 0}} md={colFilterMed} lg={colFilterMed} xl={colFilterMed}>
            <Row>

              {filterByYear()}
              
              <Col >   
                <Button 
                  type='submit'
                  variant="dark" 
                  className='text-white c-orange w-100 py-0' 
                  id="button-addon2"
                ><i className="bi bi-search"></i>
                </Button>
              </Col>

            </Row>
          </Col>

        </Row>
      </Form >
    )
  }
}

export default SecFilters
