import React, { useState, useEffect } from 'react'
import { Link, redirect } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

class SecUserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:  "",
            confirmPassword:  "",
            firstName:  "",
            lastName: "",
            email: ""
        }
    }

    render() { 
		return (
            <Form onSubmit={(e) => this.props.submitHandler(this.state,e)}>

                <Form.Group controlId='Username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        required
                        type='Name'
                        placeholder='Enter Username'
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='First Name'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        type='Name'
                        placeholder='Enter First Name'
                        value={this.state.firstName}
                        onChange={(e) => this.setState({ firstName: e.target.value })}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='Last Name'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        required
                        type='Name'
                        placeholder='Enter Last Name'
                        value={this.state.lastName}
                        onChange={(e) => this.setState({ lastName: e.target.value })}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={this.state.confirmPassword}
                        onChange={(e) => this.setState({ confirmPassword: e.target.value })}                    >
                    </Form.Control>
                </Form.Group>

                <Button  type='submit' variant='primary'>
                    Register
                </Button>

                <Row className='py-3'>
                    <Col>
                        Have an account? <Link
                            to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                            Sign in
                        </Link>
                    </Col>
                </Row>

            </Form>
        )
    }
}

export default SecUserInfo
