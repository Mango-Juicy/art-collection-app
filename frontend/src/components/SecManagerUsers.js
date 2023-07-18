import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container, Modal } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from './main/Loader'
import Message from './main/Message'
import CardDetail from './CardDetail'
import FormItem from './FormItem'

import { getItemById, getItemsBySearch } from '../actions/itemActions'
import { getUser, setUser } from '../actions/userActions'
import SecFilters from './SecFilters'
import FormUser from './FormUser'

const TXT_BTN_ADD  = "Add New Item"

function SecManagerUsers() {

    const dispatch = useDispatch()
    
    const [showDialog, setShowDialog] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({})

    const user = useSelector(state => state.user)
    const { userInfo } = user 

    const userList = useSelector(state => state.userList)
    const { error, loading, users } = userList    

    useEffect(() => {
        dispatch(getUser(userInfo.access))
    }, [])

    //TODO: search user
    const searchHandler = (state,e) => {
        e.preventDefault()
        if (
              state.query?.length > 2 || 
              state.yearFrom !== undefined ||
              state.yearTo !== undefined
           ) {
          const params = {
            query: state.query,
            yearFrom: state.yearFrom,
            yearTo: state.yearTo
          }
          
          dispatch(
            getItemsBySearch(params)
          )
        }else{
            dispatch(getItemById())
        }
    }

    const handleEdit = (item) => {
        setItemToEdit(item)
        setShowDialog(true)
    }

    const handleCancel = (e) => {
        setShowDialog(false)
    }

    const handleSubmit = (state,e) => {
        setShowDialog(false)

        const formData = new FormData();
        formData.append('id', state.id);
        formData.append('username', state.username);
        formData.append('first_name', state.first_name);
        formData.append('last_name', state.last_name);
        formData.append('email', state.email);
        formData.append('password', state.password);

        dispatch(setUser(formData, userInfo.access))
        dispatch(getUser(userInfo.access))
    }

    const handleAdd = () => {
        setShowDialog(true)
        setItemToEdit("")        
    }

    // TODO: Export this function as global
    const handleErrorLoading = (error, loading, content) => {
        return(
            error ? <Message variant='danger'>{error}</Message>
            : (
                loading ? <Loader/>
                :   content
            )
        )
    }

    // Safe content 
    const content = () => {
        return(
            <>           
                <div className='c-primary p-3 my-2'>
                    <Row>                    
                        <Col>
                            <h4 className='text-white mt-2 mb-0'>Items</h4>                                                     
                        </Col>
                        <Col className='text-end'>
                        
                            <Button      
                                variant="dark" 
                                className='text-white c-orange py-1 fs-6 m-0' 
                                id="button-2"   
                                onClick={() => handleAdd()}                                 
                                >Aggiungi
                            </Button>                                                     
                        </Col>
                    </Row>
                
                    
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>                
                    <SecFilters submitHandler={searchHandler}></SecFilters>
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>

                    <Row className='m-0 text-white c-primary'>                    
                        <Col className='p-0'  sm={3} md={3} lg={3} xl={3}>
                            <p className='m-2'>Username</p>                                                       
                        </Col>  
                        <Col className='p-0' sm={4} md={4} lg={4} xl={4}>
                            <p className='m-2'>Name</p>                                                       
                        </Col>  
                        <Col className='p-0'  sm={3} md={3} lg={3} xl={3}>
                            <p className='m-2'>Email</p>                                                       
                        </Col>          
                        <Col className='p-0' sm={2} md={2} lg={2} xl={2}>                                                    
                        </Col>                                      
                    </Row>
                    <hr className='my-2  text-white' style={{height: "1px"}}/>

                    {                 
                        users.map((user) => (       
                            <Row className='m-1 text-white' key={user.id} >                    
                                <Col className='p-0' sm={3} md={3} lg={3} xl={3}>
                                    <p className='m-2'>{user.username}</p>                                                       
                                </Col>  
                                <Col className='p-0' sm={4} md={4} lg={4} xl={4}>
                                        <p className='m-2'>{user.first_name + " " + user.last_name}</p>                                                       
                                </Col>  
                                <Col className='p-0' sm={3} md={3} lg={3} xl={3}>
                                        <p className='m-2'>{user.email}</p>                                                       
                                </Col>      
                                <Col className='p-0 text-end' sm={2} md={2} lg={2} xl={2}>
                                        <Button      
                                            variant="dark" 
                                            className='text-white c-secondary py-1 fs-6' 
                                            id="button-2"   
                                            onClick={() => handleEdit(user)}                                 
                                            >Modifica
                                        </Button>                                                         
                                </Col>                                              
                                <hr className='my-2' style={{height: "1px"}}/>
                            </Row>
                        )) 
                    }  
                </div>

                <Modal size="lg" show={showDialog} onHide={handleCancel}>
                    <div className='c-primary'>
                        <FormUser 
                            state={itemToEdit}
                            handleSubmit={handleSubmit}
                            handleCancel={handleCancel}
                        >
                        </FormUser>
                    </div>  
                </Modal>
            </>
        )
    }

    return (                  
        handleErrorLoading(
            error,
            loading,
            content()
        )      
    )

}

export default SecManagerUsers
