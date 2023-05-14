import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import { getItemById } from '../actions/itemActions';
import CardImg from '../components/CardImg';

export default function CartScreen() {
    const params = useParams();
    const location = useLocation()
    const productId = params.id

    const dispatch = useDispatch()

    const itemDetails = useSelector(state => state.itemDetails);
    const { item } = itemDetails;

    useEffect(() => {
        if (productId) {
            dispatch(getItemById(productId))
        }
    }, [dispatch, productId])

    return (
        <Row>
            <h1>Contact us</h1>
            <Col md={8}>                
                <CardImg  item={item} />  
            </Col>
            <Col md={4}>                
                <p>Contact us to get all info about the {item.name}</p>
            </Col>
        </Row>
    )

}