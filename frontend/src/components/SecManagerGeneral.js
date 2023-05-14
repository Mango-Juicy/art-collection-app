import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from './main/Loader'
import Message from './main/Message'

import { getConfiguration } from '../actions/itemActions'


function SecManagerGeneral() {

    const dispatch = useDispatch()
    
    const configList = useSelector(state => state.configList)
    const { error, loading, config } = configList  
    const [configInfo, setConfigInfo] = useState({})

    const handleConfig = (setting, settingField) => {
        const value = config
            .filter(item => 
                item.setting === setting && 
                item.settingField === settingField)
            .map(item => 
                item.value
        )
        return value
    }
    
    useEffect(() => {
        dispatch(getConfiguration())
        setConfigInfo({
            title: handleConfig("title","title"),
            email: handleConfig("contacts","email"),
            phone: handleConfig("contacts","phone"),
            colorPrimary: handleConfig("colorPalette","colorPrimary"),
            colorSecondary: handleConfig("colorPalette","colorSecondary"),
            colorAccent: handleConfig("colorPalette","colorAccent")
        })
    }, [])

    return (
        <div className='text-white'>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <div className='c-primary p-3 my-2'>
                <h4 className='text-white'>Informazioni Generali</h4>
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                <p>Title: {configInfo.title}</p>
                <p>Contatti email: {configInfo.email}</p>
                <p>Contatti telefono: {configInfo.phone}</p>
            </div>
            
            <div className='c-primary p-3 my-2'>
                <h4 className='text-white'>Aspetto</h4>
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                <p>Colore Primario: {configInfo.colorPrimary}</p>
                <p>Colore Secondario: {configInfo.colorSecondary}</p>
                <p>Colore Accent: {configInfo.colorAccent}</p>
                <p>Pulsanti Home Page: </p>
            </div>
        </div>
    )

}

export default SecManagerGeneral
