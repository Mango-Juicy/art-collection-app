import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from './main/Loader'
import Message from './main/Message'
import CardDetail from './CardDetail'

import { getItemById, getItemsBySearch } from '../actions/itemActions'
import SecFilters from './SecFilters'

const TXT_BTN_ADD  = "Add New Item"

function SecManagerItems() {

    const dispatch = useDispatch()
    
    const [addNewItem, setAddNewItem] = useState(false);

    const itemList = useSelector(state => state.itemList)
    const { error, loading, items } = itemList
    
    useEffect(() => {
        dispatch(getItemById())
    }, [])

    const addItem = (e) =>{
        e.preventDefault()
        setAddNewItem(!addNewItem)        
    }

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

    return (
        <>
            <SecFilters submitHandler={searchHandler}></SecFilters>
            <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>

            {
                addNewItem ?
                    <Row>
                        <CardDetail product={""} addNewItem = {true} />       
                    </Row>
                : <></> 
            }
            {items.map((item, index) => (       
                <Row className='m-0' key={item.id} >                    
                    <CardDetail product={item} addNewItem = {false} />                             
                </Row>
            ))}  
        </>
    )

}

export default SecManagerItems
