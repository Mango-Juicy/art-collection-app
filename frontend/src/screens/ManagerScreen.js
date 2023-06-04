import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import SecManagerItems from '../components/SecManagerItems'

import { getItemById } from '../actions/itemActions'
import SecManagerGeneral from '../components/SecManagerGeneral'

const TXT_BTN_LBL  = [
    "GENERALE", 
    "GESTISCI ITEMS", 
    "GESTISCI UTENTI"
]

function ManagerScreen({configInfo}) {

    const colWSmall = {span: 3, offset: 0}
    const colWMed = {span: 9, offset: 0}
    const colWFull = {span: 8, offset: 2}

    // Side menu and tabs
    const [tab, setTab] = useState(0)

    // Side menu, handle buttons color
    const buttonGroup = () => {

        const style = Array(3).fill('c-primary my-2 w-100')
        style.splice(tab, 1, 'my-2 w-100')

        return(
            TXT_BTN_LBL.map((label, index) => (
                <Button 
                    key={index}
                    className={style.at(index)}                        
                    onClick={(e) => (setTab(index))}
                >{label}
                </Button>
            ))
        )
    }

    const secGroup = () => {
        switch (tab) {
            case 0:
                return <SecManagerGeneral configInfo={configInfo}></SecManagerGeneral> 
            case 1:
                return <SecManagerItems></SecManagerItems>   
            case 2:
                return <SecManagerItems></SecManagerItems>                                             
            default:
                return <SecManagerGeneral configInfo={configInfo}></SecManagerGeneral>
        }
    }

    return (
        <div className='py-2'>
            <Row>
                <h2 className='text-white'>Gestisci Applicazione</h2>

                <Col sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                    {buttonGroup()}
                </Col>

                <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                    {secGroup()}            
                </Col>

            </Row>
        </div>
        
    )

}

export default ManagerScreen
