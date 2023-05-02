import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'
import Loader from '../components/main/Loader'
import Message from '../components/main/Message'
import { updateUserProfile } from '../actions/userActions'
import FormUser from '../components/FormUser'

function ProfileScreen() {

    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const redirect = location.state ? Number(location.state) : '/'

    const user = useSelector(state => state.user)
    const { error, loading, userInfo, success } = user

    useEffect(() => {
        if (user == null) {
            navigate(redirect)
        } 
        // else {
        //     if (!userInfo || !userInfo.first_name || success) {
        //         dispatch({ type: USER_UPDATE_PROFILE_RESET })
        //         dispatch(getUserDetails(userInfo.id))            
        //     } else {
        //         setName(userInfo.first_name)
        //         setEmail(userInfo.email)

        //     }
        // }
    }, [navigate, user])


    const submitHandler = (state, e) => {
        e.preventDefault()
        if (state.password !== state.confirmPassword) {
            setMessage('Password do not match')
        } else {
            const userData ={
                id: userInfo.id,
                username: state.username, 
                password: state.password, 
                first_name: state.firstName,
                last_name: state.lastName,
                email: state.email
            }
            dispatch(updateUserProfile(userData))
        }

    }

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}

                <FormUser submitHandler={submitHandler} userInfo={userInfo}></FormUser>

            </Col>
        </Row>
    )
}

export default ProfileScreen
