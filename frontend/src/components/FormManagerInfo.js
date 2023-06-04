import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { SketchPicker } from 'react-color';


const LBL_BTN_MODIFY = "Modifica"
const LBL_BTN_CANCEL = "Annulla"
const LBL_BTN_SAVE = "Salva"

class FormManagerInfo extends React.Component {

    constructor(props) {
        super(props);
        const localState = {
            modifyPrimary: false,
            modifySecondary: false,
            modifyAccent: false
        }
        if (this.props.state === "" ){
            this.state = {
                info: { 
                    title: "",
                    email:  "",
                    phone:  "",
                    colorPrimary: "",
                    colorSecondary:  "",
                    colorAccent:  ""   
                },
                local: localState
            }
        }else { 
            this.state = {
                info : this.props.state,
                local: {
                    modifyPrimary: false,
                    modifySecondary: false,
                    modifyAccent: false
                }
               }
        }

    }

    render() {             
        const colWSmall = {span: 4, offset: 0}
        const colWFull = {span: 12, offset: 0}
        

        const infoForm = () => {
            return(
                <Form>

                    <Form.Group className='m-2' as={Row} controlId="title">
                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Title</Form.Label>
                        <Col> 
                            <Form.Control
                                className='c-primary text-white border border-primary py-2'
                                type="text"
                                placeholder="Enter Title"
                                value={this.state.info.title}
                                onChange={(e) => this.setState(
                                    {
                                        ...this.state,
                                        info: {
                                            ...this.state.info,
                                            title: e.target.value 
                                        }
                                    })
                                }                  
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className='m-2' as={Row} controlId="email">
                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Email</Form.Label>
                        <Col> 
                            <Form.Control
                                className='c-primary text-white border border-primary py-2'
                                type="text"
                                placeholder="Enter Email"
                                value={this.state.info.email}
                                onChange={(e) => this.setState(
                                    {
                                        ...this.state,
                                        info: {
                                            ...this.state.info,
                                            email: e.target.value 
                                        }
                                    })
                                }                     
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group className='m-2' as={Row} controlId="phone">
                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Phone</Form.Label>
                        <Col> 
                            <Form.Control
                                className='c-primary text-white border border-primary py-2'
                                type="text"
                                placeholder="Enter Phone"
                                value={this.state.info.phone}
                                onChange={(e) => this.setState(
                                    {
                                        ...this.state,
                                        info: {
                                            ...this.state.info,
                                            phone: e.target.value 
                                        }
                                    })
                                }                    
                            />
                        </Col>
                    </Form.Group>

                </Form>
            );
        }

        const aspectForm = () => {
            return(                  
                <Form>

                    <Form.Group className='m-2' as={Row} controlId="colorPrimary">
                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Primary Color</Form.Label>
                        <Col> 
                            <Button      
                                variant="dark" 
                                className='text-white py-1 fs-6' 
                                id="button-2"
                                style={{backgroundColor: this.state.info.colorPrimary}}
                                onClick={(e) => this.setState(
                                    {
                                        ...this.state,
                                        local: {
                                            ...this.state.local,
                                            modifyPrimary: !this.state.local.modifyPrimary
                                        }
                                    })
                                }                                                
                            >{this.state.local.modifyPrimary ? "Conferma" : LBL_BTN_MODIFY}
                            </Button>
                            {
                                this.state.local.modifyPrimary ? 
                                    <SketchPicker                            
                                        color={this.state.info.colorPrimary}
                                        onChange={(color) => this.setState(
                                            {
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    colorPrimary: color.hex
                                                }
                                            })
                                        }    
                                    />                                    
                                : <></>
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group className='m-2' as={Row} controlId="colorSecondary">
                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Secondary Color</Form.Label>
                        <Col> 
                            <Button      
                                variant="dark" 
                                className='text-white py-1 fs-6' 
                                id="button-2"
                                style={{backgroundColor: this.state.info.colorSecondary}}
                                onClick={(e) => this.setState(
                                    {
                                        ...this.state,
                                        local: {
                                            ...this.state.local,
                                            modifySecondary: !this.state.local.modifySecondary
                                        }
                                    })
                                }                                                       
                            >{this.state.local.modifySecondary ? "Conferma" : LBL_BTN_MODIFY}
                            </Button>
                            {
                                this.state.local.modifySecondary ? 
                                    <SketchPicker                            
                                        color={this.state.info.colorSecondary}
                                        onChange={(color) => this.setState(
                                            {
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    colorSecondary: color.hex
                                                }
                                            })
                                        }    
                                    />
                                    
                                : <></>
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group className='m-2' as={Row} controlId="colorAccent">
                        <Form.Label column sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>Accent Color</Form.Label>
                        <Col> 
                            <Button      
                                variant="dark" 
                                className='text-white py-1 fs-6' 
                                id="button-2"
                                style={{backgroundColor: this.state.info.colorAccent}}
                                onClick={(e) => this.setState(
                                    {
                                        ...this.state,
                                        local: {
                                            ...this.state.local,
                                            modifyAccent: !this.state.local.modifyAccent
                                        }
                                    })
                                }                                                     
                            >{this.state.local.modifyAccent ? "Conferma" : LBL_BTN_MODIFY}
                            </Button>
                            {
                                this.state.local.modifyAccent ? 
                                    <SketchPicker                            
                                        color={this.state.info.colorAccent}
                                        onChange={(color) => this.setState(
                                            {
                                                ...this.state,
                                                info: {
                                                    ...this.state.info,
                                                    colorAccent: color.hex
                                                }
                                            })
                                        }    
                                    />                                    
                                : <></>
                            }
                        </Col>
                        
                    </Form.Group>

                </Form>
            );
        }
    
            
        return (
            <>
                <div className='c-primary p-3 my-2'>
                    <h4 className='text-white'>Informazioni Generali</h4>
                    
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>

                    {infoForm()}                  
                </div>  

            
                <div className='c-primary p-3 my-2'>
                    <h4 className='text-white'>Aspetto</h4>
                    
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                    
                    {aspectForm()}
                </div>           

                {
                    this.state.info === this.props.state ? <></> :
                    <Form.Group className='my-3' as={Row} controlId="buttons">
                        <Col className='text-start'> 
                            <Button                     
                                variant="dark" 
                                className='text-white py-1 fs-6' 
                                id="button-1"
                                onClick={(e) => this.setState(
                                    {
                                        info: this.props.state,
                                        local: this.state.local                                           
                                    })
                                }         
                                >{LBL_BTN_CANCEL}
                            </Button>
                        </Col>
                        <Col className='text-end'> 
                            <Button      
                                variant="dark" 
                                className='text-white c-orange py-1 fs-6' 
                                id="button-2"
                                onClick={(e) => this.props.handleSubmit(this.state.info,e)}
                                >{LBL_BTN_SAVE}
                            </Button>
                        </Col>
                    </Form.Group>
                }

            </>
        );
    }
}

export default FormManagerInfo
