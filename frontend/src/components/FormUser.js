import React from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

const LBL_BTN_CANCEL = "Annulla"
const LBL_BTN_SAVE = "Salva"

class FormUser extends React.Component {

    constructor(props) {
        super(props);
        const isStateNull = this.props.state === "" ? true : false
        this.state = {
            id: isStateNull ? "" : this.props.state.id,
            username: isStateNull ? "" : this.props.state.username,
            first_name:  isStateNull ? "" : this.props.state.first_name,
            last_name: isStateNull ? "" : this.props.state.last_name,
            email: isStateNull ? "" : this.props.state.email,
            isChangePassword: false,
            password:  "",
            confirmPassword:  ""
        }
        console.log(this.state.password)
            
    
    }

    render() { 

        const itemPassword = () => {
            return(
                <>            
                    <Form.Group className='my-2 mx-0' controlId='password'>
                        <FloatingLabel className='p-0' label="New Password" controlId="password">
                            <Form.Control                              
                                type='password'
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                            >
                            </Form.Control>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className='my-2 mx-0' controlId='passwordConfirm'>
                        <FloatingLabel className='p-0' label="Confirm Password" controlId="confirmPassword">
                            <Form.Control                             
                                type='password'
                                value={this.state.confirmPassword}
                                onChange={(e) => this.setState({ confirmPassword: e.target.value })}                    >
                            </Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                </>
            )
        }

        const itemForm = () => {
            return(
                <Form >
                    <Row>
                        <Col>
                            <Form.Group className='my-2 mx-0' controlId='Username'>
                                <FloatingLabel className='p-0' label="Username" controlId="name">
                                    <Form.Control
                                        required
                                        type='text'
                                        value={this.state.username}
                                        onChange={(e) => this.setState({ username: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' controlId='First Name'>
                                <FloatingLabel className='p-0' label="First Name" controlId="first_name">
                                    <Form.Control
                                        required
                                        type='text'
                                        value={this.state.first_name}
                                        onChange={(e) => this.setState({ first_name: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' controlId='Last Name'>
                                <FloatingLabel className='p-0' label="Last Name" controlId="last_name">
                                    <Form.Control
                                        required
                                        type='text'
                                        value={this.state.last_name}
                                        onChange={(e) => this.setState({ last_name: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className='my-2 mx-0' controlId='email'>
                                <FloatingLabel className='p-0' label="Email" controlId="email">
                                    <Form.Control
                                        required
                                        type='email'
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    >
                                    </Form.Control>
                                </FloatingLabel>
                            </Form.Group>

                            {
                                this.state.isChangePassword ?  itemPassword()
                                :   <Button                     
                                        variant="dark" 
                                        className='text-white py-1 fs-6' 
                                        id="button-1"
                                        onClick={() => this.setState({ isChangePassword: true })}         
                                        >Change Password
                                    </Button>                                
                            }
                          

                        </Col>
                    </Row>
                </Form>
            );
        }

		return (

            <div className='c-primary p-3 my-2'>
                <h4 className='text-white'>Aggiungi User</h4>
                
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

export default FormUser
