import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container, Modal } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from './main/Loader'
import Message from './main/Message'
import CardDetail from './CardDetail'
import FormItem from './FormItem'

import { getItemById, getItemsBySearch } from '../actions/itemActions'
import SecFilters from './SecFilters'

const TXT_BTN_ADD  = "Add New Item"

function SecManagerItems() {

    const dispatch = useDispatch()
    
    const [showDialog, setShowDialog] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({})

    const itemList = useSelector(state => state.itemList)
    const { error, loading, items } = itemList    

    useEffect(() => {
        dispatch(getItemById())
    }, [])

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
        console.log(item)
    }

    const handleCancel = (e) => {
        setShowDialog(false)
    }

    const handleSubmit = (state,e) => {
        setShowDialog(false)
        // addNewItem action
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
                                onClick={() => setShowDialog(true)}                                 
                                >Aggiungi
                            </Button>                                                     
                        </Col>
                    </Row>
                
                    
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>                
                    <SecFilters submitHandler={searchHandler}></SecFilters>
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>

                    <Row className='m-0 text-white c-primary'>                    
                        <Col className='p-0' sm={4} md={4} lg={4} xl={4}>
                            <p className='m-2'>Name</p>                                                       
                        </Col>  
                        <Col className='p-0' sm={5} md={5} lg={5} xl={5}>
                            <p className='m-2'>Description</p>                                                       
                        </Col>  
                        <Col className='p-0' sm={1} md={1} lg={1} xl={1}>
                            <p className='m-2'>Year</p>                                                       
                        </Col>          
                        <Col className='p-0' sm={2} md={2} lg={2} xl={2}>                                                    
                        </Col>                                      
                    </Row>
                    <hr className='my-2  text-white' style={{height: "1px"}}/>

                    {                
                        items.map((item) => (       
                            <Row className='m-1 text-white' key={item.id} >                    
                            <Col className='p-0' sm={4} md={4} lg={4} xl={4}>
                                    <p className='m-2'>{item.name.slice(0,50)}</p>                                                       
                            </Col>  
                            <Col className='p-0' sm={5} md={5} lg={5} xl={5}>
                                    <p className='m-2'>{item.description.slice(0,50) + "..."}</p>                                                       
                            </Col>  
                            <Col className='p-0' sm={1} md={1} lg={1} xl={1}>
                                    <p className='m-2'>{item.year}</p>                                                       
                            </Col>      
                            <Col className='p-0 text-end' sm={2} md={2} lg={2} xl={2}>
                                    <Button      
                                        variant="dark" 
                                        className='text-white c-secondary py-1 fs-6' 
                                        id="button-2"   
                                        onClick={() => handleEdit(item)}                                 
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
                        <FormItem 
                            state={itemToEdit}
                            handleSubmit={handleSubmit} 
                            handleCancel={handleCancel}
                        >
                        </FormItem>
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

export default SecManagerItems
