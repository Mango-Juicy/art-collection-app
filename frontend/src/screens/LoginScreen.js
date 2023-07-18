import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'
import Loader from '../components/main/Loader'
import Message from '../components/main/Message'
import { getUserToken, getUserProfile } from '../actions/userActions'

function LoginScreen({ }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect = location.state ? Number(location.state) : '/'

    const userAuth = useSelector(state => state.userAuth)
    const { error, loading, userToken } = userAuth

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userToken) {       
            dispatch(getUserProfile(userToken))   
            navigate(redirect)            
        }
    }, [userToken])
   

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(getUserToken(username, password))
    }

    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='username'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='username'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>


            </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen