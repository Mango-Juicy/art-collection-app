import React from 'react'
import { Form, Button, Row, Col, Card, FloatingLabel } from 'react-bootstrap'

const LBL_BTN_MODIFY = "Modifica"
const LBL_BTN_CANCEL = "Annulla"
const LBL_BTN_SAVE = "Salva"

class FormItem extends React.Component {

    constructor(props) {
        super(props);
        const isStateNull = this.props.state === "" ? true : false
        this.state = {
            id:  isStateNull ? "" : this.props.state.id,
            name: isStateNull ? "" : this.props.state.name,
            description:  isStateNull ? "" : this.props.state.description,
            brand: isStateNull ? "" : this.props.state.brand,
            image: isStateNull ? "" : this.props.state.image,
            localImage: null,
            idCategory: isStateNull ? "" : this.props.state.idCategory,
            tag: isStateNull ? "" : this.props.state.tag,
            price: isStateNull ? "" : this.props.state.price,
            year: isStateNull ? "" : this.props.state.year,
            available: "True"
        }           

        
    }

    render() {             
        const colWSmall = {span: 4, offset: 0}
        const colWMed = {span: 6, offset: 0}
        const colWFull = {span: 12, offset: 0}

        const itemForm = () => {
            return(
                <Form >
                    <Row>
                        <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
                            {
                                this.state.localImage === null ? (
                                    this.state.image === null ? <></>
                                    : <Card.Img className="border-0" src={this.state.image} />
                                ) : <Card.Img className="border-0" src={this.state.localImage} />
                            }
                            <Form.Group className='my-2 mx-0' as={Row} controlId='image'>
                                    <Form.Control
                                        required
                                        type='file'
                                        id='uploadImage'                                        
                                        accept='image/*'
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            this.setState({ image: file });
                                            const reader = new FileReader();
                                            reader.onload = () => {
                                                this.setState({ localImage: reader.result });
                                            };
                                            reader.readAsDataURL(file);
                                        }}
                                    />
                            </Form.Group>
                        </Col>

                        <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed} >
                            
                            <Form.Group className='mb-2 mx-0' as={Row} controlId='name'>
                                <FloatingLabel className='p-0' label="Name" controlId="name">
                                    <Form.Control                         
                                        required
                                        type='text'
                                        placeholder='Enter name'
                                        value={this.state.name}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>                     
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' as={Row} controlId='year'>
                                <FloatingLabel className='p-0' label="Year" controlId="year">
                                    <Form.Control
                                        required
                                        type='number'
                                        placeholder='Enter year'
                                        value={this.state.year}
                                        onChange={(e) => this.setState({ year: e.target.value })}>
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' as={Row} controlId='brand'>
                                <FloatingLabel className='p-0' label="Brand" controlId="brand">                                
                                    <Form.Control
                                        required
                                        type='text'
                                        placeholder='Enter brand'
                                        value={this.state.brand}
                                        onChange={(e) => this.setState({ brand: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>                        

                            <Form.Group className='my-2 mx-0' as={Row} controlId='idCategory'>
                                <FloatingLabel className='p-0' label="Category" controlId="category">
                                    <Form.Select 
                                        value={this.state.idCategory} 
                                        id="idCategory"
                                        onChange={(e) => this.setState({ idCategory: e.target.value })}
                                    >
                                        <option value={null}>Select Category</option>
                                        {this.props.categories.map((category) => ( 
                                          <option key={category.id} value={category.id}>{category.label}</option>                                      
                                                             
                                        ))}                                      
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' as={Row} controlId='tag'>
                                <FloatingLabel className='p-0' label="Tag" controlId="tag">
                                    <Form.Control
                                        required
                                        type='text'
                                        placeholder='Confirm tag'
                                        value={this.state.tag}
                                        onChange={(e) => this.setState({ tag: e.target.value })}>
                                    </Form.Control>
                                </FloatingLabel>                    
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' as={Row} controlId='price'>
                                <FloatingLabel className='p-0' label="Price" controlId="price">
                                    <Form.Control
                                        required
                                        type='number'
                                        placeholder='Enter price'
                                        value={this.state.price}
                                        onChange={(e) => this.setState({ price: e.target.value })}>
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>          
                    </Row>       
                    <Row>                       
                        <Col>
                            <hr className='my-3' style={{height: "2px", backgroundColor: "white"}}/>
                            <Form.Group className='my-2 mx-0' as={Row} controlId='description'>
                                <FloatingLabel className='p-0' label="Description" controlId="description"> 
                                    <Form.Control
                                        required
                                        as="textarea"
                                        type='text'
                                        style={{height: "100px"}}
                                        value={this.state.description}
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>                                
                </Form>
            );
        }
            
		return (
            <div className='c-primary p-3 my-2'>
                <h4 className='text-white'>Aggiungi Item</h4>
                
                <hr className='mb-3 mt-2' style={{height: "2px", backgroundColor: "white"}}/>

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
