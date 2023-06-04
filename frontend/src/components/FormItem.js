import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

class FormItem extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.state === "" ){
            this.state = {
                name: "",
                description:  "",
                brand:  "",
                image: "",
                category:  "",
                tag:  "",
                price: "",
                year: "",
            }
        }else { this.state = this.props.state}
        
    }

    render() {             
        const colWSmall = {span: 4, offset: 0}
        const colWFull = {span: 12, offset: 0}
            
		return (
            <Form onSubmit={(e) => this.props.submitHandler(this.state,e)}>
                <Row>
                    <Col>
                        <Form.Group className='my-2 mx-0' as={Row} controlId='image'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Image</Form.Label>
                            <Col>
                                <Form.Control
                                    required
                                    type='file'
                                    placeholder='Enter image'
                                    value={this.state.image}
                                    onChange={(e) => this.setState({ image: e.target.value })}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group className='my-2 mx-0' as={Row} controlId='name'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Name</Form.Label>                    
                            <Col>   
                                <Form.Control                         
                                    required
                                    type='Name'
                                    placeholder='Enter name'
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group className='my-2 mx-0' as={Row} controlId='description'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall} >Description</Form.Label>
                            <Col> 
                                <Form.Control
                                    required
                                    type='Name'
                                    placeholder='Enter description'
                                    value={this.state.description}
                                    onChange={(e) => this.setState({ description: e.target.value })}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>      
                    <Col>
                        <Form.Group className='my-2 mx-0' as={Row} controlId='brand'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Brand</Form.Label>
                            <Col>
                                <Form.Control
                                    required
                                    type='Name'
                                    placeholder='Enter brand'
                                    value={this.state.brand}
                                    onChange={(e) => this.setState({ brand: e.target.value })}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        

                        <Form.Group className='my-2 mx-0' as={Row} controlId='category'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Catergory</Form.Label>
                            <Col>
                                <Form.Control
                                    required
                                    type='name'
                                    placeholder='Enter category'
                                    value={this.state.category}
                                    onChange={(e) => this.setState({ category: e.target.value })}
                                >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group className='my-2 mx-0' as={Row} controlId='tag'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Tag</Form.Label>
                            <Col>
                                <Form.Control
                                    required
                                    type='name'
                                    placeholder='Confirm tag'
                                    value={this.state.tag}
                                    onChange={(e) => this.setState({ tag: e.target.value })}                    >
                                </Form.Control>
                            </Col>                    
                        </Form.Group>

                        <Form.Group className='my-2 mx-0' as={Row} controlId='price'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Price</Form.Label>
                            <Col>
                                <Form.Control
                                    className='rounded'
                                    required
                                    type='name'
                                    placeholder='Enter price'
                                    value={this.state.tag}
                                    onChange={(e) => this.setState({ price: e.target.value })}                    >
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group className='my-2 mx-0' as={Row} controlId='year'>
                            <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Year</Form.Label>
                            <Col>
                                <Form.Control
                                    required
                                    type='name'
                                    placeholder='Enter year'
                                    value={this.state.tag}
                                    onChange={(e) => this.setState({ year: e.target.value })}                    >
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>          
                </Row>

            </Form>
        )
    }
}

export default FormItem
