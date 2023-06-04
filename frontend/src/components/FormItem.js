import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const LBL_BTN_MODIFY = "Modifica"
const LBL_BTN_CANCEL = "Annulla"
const LBL_BTN_SAVE = "Salva"

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

        const itemForm = () => {
            return(
                <Form onSubmit={(e) => this.props.submitHandler(this.state,e)}>
                    <Row>
                        <Col>
                            {
                                this.state.image === "" ?
                                    <Form.Group className='my-2 mx-0' as={Row} controlId='image'>
                                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Image</Form.Label>
                                        <Col>
                                            <Form.Control
                                                required
                                                type='file'
                                                accept='image/*'
                                                placeholder='Enter image'
                                                value={this.state.image}
                                                onChange={(e) => this.setState({ image: e.target.value })}
                                            >
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                : <></>
                            }

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
            );
        }
            
		return (
            <div className='c-primary p-3 my-2'>
                <h4 className='text-white'>Aggiungi Item</h4>
                
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>

                {itemForm()}     
                    
                <Form.Group className='my-3' as={Row} controlId="buttons">
                    <Col className='text-start'> 
                        <Button                     
                            variant="dark" 
                            className='text-white py-1 fs-6' 
                            id="button-1"
                            onClick={() => this.props.handleCancel()}         
                            >{LBL_BTN_CANCEL}
                        </Button>
                    </Col>
                    <Col className='text-end'> 
                        <Button      
                            variant="dark" 
                            className='text-white c-orange py-1 fs-6' 
                            id="button-2"
                            onClick={(e) => this.props.handleSubmit(this.state,e)}
                            >{LBL_BTN_SAVE}
                        </Button>
                    </Col>
                </Form.Group>
            
            </div> 
        )
    }
}

export default FormItem
