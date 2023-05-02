import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'
import Loader from '../components/main/Loader'
import Message from '../components/main/Message'
import { register } from '../actions/userActions'
import FormUser from '../components/FormUser'


function RegisterScreen() {

    const [message, setMessage] = useState('')
    
    const dispatch = useDispatch()

    //const redirect = location.search ? location.search.split('=')[1] : '/'
    const location = useLocation()
    const navigate = useNavigate()

    const user = useSelector(state => state.user)
    const { error, loading, userInfo } = user

    const submitHandler = (state,e) => {      
        e.preventDefault()
        if (state.password != state.confirmPassword) {
            setMessage('Password do not match')
        } else {
            console.log('Updating...')
            const userData ={ 
                username: state.username, 
                password: state.password, 
                first_name: state.firstName,
                last_name: state.lastName,
                email: state.email
            }
            dispatch(register(userData))
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>

                    <h1>Register</h1>

                    {message && <Message variant='danger'>{message}</Message>}

                    {error && <Message variant='danger'>{error}</Message>}

                    {loading && <Loader />}

                    <FormUser submitHandler={submitHandler}></FormUser>
                    
                </Col>
            </Row>

        </Container>
    )
}

export default RegisterScreen
