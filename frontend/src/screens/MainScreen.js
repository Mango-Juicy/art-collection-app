import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, InputGroup, Row, Col, Container, Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { getItemsByCategory, getItemsBySearch } from '../actions/itemActions'
import SecCards from '../components/SecCards'
import SecFilters from '../components/SecFilters';

function MainScreen({idCategory}) {  

  const dispatch = useDispatch()
  const itemList = useSelector(state => state.itemList)
  const { error, loading, items } = itemList

  useEffect(() => {
    dispatch(getItemsByCategory(idCategory))
  }, [idCategory])

  const searchHandler = (state,e) => {
    e.preventDefault()
    if (
          state.query?.length > 2 || 
          state.yearFrom !== undefined ||
          state.yearTo !== undefined
       ) {
      const params = {
        query: state.query,
        idCategory: idCategory,
        yearFrom: state.yearFrom,
        yearTo: state.yearTo
      }
      
      dispatch(
        getItemsBySearch(params)
      )
    }else{
      dispatch(getItemsByCategory(idCategory))
    }
  }

  return (
    <>
      <hr style={{height: "2px", backgroundColor: "white"}}/>
      <SecFilters submitHandler={searchHandler}></SecFilters>      
      <hr className='my-3' style={{height: "2px", backgroundColor: "white"}}/>
      <SecCards items={items} idCategory={idCategory}></SecCards>
    </>
  )
}

export default MainScreen
