import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import {handleErrorLoading} from '../global/functions'

import { getUserProfile, updateUserProfile } from '../actions/userActions'
import FormUser from '../components/FormUser'

function ProfileScreen({userInfo}) {

    const [message, setMessage] = useState('')

    const userAuth = useSelector(state => state.userAuth)
    const { error, loading, userToken } = userAuth

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const redirect = location.state ? Number(location.state) : '/'

    useEffect(() => {
        if (userInfo == null) {
            navigate(redirect)
        } 
    }, [navigate, userInfo])


    const handleSubmit = (state, e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('id', state.id);
        formData.append('username', state.username);
        formData.append('first_name', state.first_name);
        formData.append('last_name', state.last_name);
        formData.append('email', state.email);
        formData.append('password', state.password);

        dispatch(updateUserProfile(formData, userToken.access))
    }

    const content = () => {
        return(
            <FormUser handleSubmit={handleSubmit} title={"Aggiungi User"} state={userInfo}></FormUser>
        )
    }

    return (
        <Row>
            <Col md={6}>
           { 
                handleErrorLoading(
                    error,
                    loading,
                    content()
                )
           }
            </Col>
        </Row>
    )
}

export default ProfileScreen
