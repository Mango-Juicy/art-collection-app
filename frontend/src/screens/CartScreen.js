import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Card, Row, Col, Image, ListGroup, Button, Form, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../actions/cartActions';
import { Message } from '../components/Message';
import GalleryCard from '../components/GalleryCard';

export default function CartScreen() {
    const params = useParams();
    const location = useLocation()
    const productId = params.id

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItem } = cart
    const state = useSelector(state => state)
    console.log('state:', state)
    console.log('cartItem:', cartItem)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId))
        }
    }, [dispatch, productId])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <Row>
            <h1>Contact us</h1>
            <Col md={8}>                
                <GalleryCard  product={cartItem.product} />  
            </Col>
            <Col md={4}>                
                <p>Contact us to get all info about the {cartItem.product.name}</p>
            </Col>
        </Row>
    )

}