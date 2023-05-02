import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from '../components/main/Loader'
import Message from '../components/main/Message'
import CardDetail from '../components/CardDetail'

import { getItemById } from '../actions/itemActions'

const TXT_BTN_ADD  = "Add New Item"

function ManageItemsScreen() {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const redirect = location.state ? Number(location.state) : '/'
    
    const [addNewItem, setAddNewItem] = useState(false);

    const productList = useSelector(state => state.productList)
    const { products } = productList

    const colWSmall = {span: 3, offset: 0}
    const colWMed = {span: 8, offset: 1}
    const colWFull = {span: 8, offset: 2}

    const user = useSelector(state => state.user)
    const { error, loading, userInfo, success } = user
    
    const addItem = (e) =>{
        e.preventDefault()
        setAddNewItem(!addNewItem)        
    }
    
    useEffect(() => {
        dispatch(getItemById())
    }, [])

    return (
        <Row>
            <h2>Manage Items</h2>

            <Col sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>
                <Button className='primary my-5 w-100' onClick={(e) => addItem(e)}>
                    {TXT_BTN_ADD}
                </Button>
            </Col>

            <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                
                {
                    addNewItem ?
                        <Row>
                            <CardDetail product={""} addNewItem = {true} /> 
                        </Row>
                    : <></> 
                }

                {products.map((product, index) => (       
                    <Row key={product._id} >
                        <CardDetail product={product} addNewItem = {false} />                             
                    </Row>
                ))}  

            </Col>

        </Row>
    )

}

export default ManageItemsScreen
