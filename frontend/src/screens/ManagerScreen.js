import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import LayoutSideMenu  from '../global/functions'

import SecManagerItems from '../components/SecManagerItems'
import SecManagerGeneral from '../components/SecManagerGeneral'
import SecManagerUsers from '../components/SecManagerUsers'





function ManagerScreen({loadingConfig, configInfo}) {


    // Side menu and tabs
    const [tab, setTab] = useState(0);
    const TXT_BTN_LBL  = [
        "GENERALE", 
        "GESTISCI ITEMS", 
        "GESTISCI UTENTI"
    ];
    const sections = [
        <SecManagerGeneral loadingConfig={loadingConfig} configInfo={configInfo}></SecManagerGeneral>,
        <SecManagerItems></SecManagerItems>,
        <SecManagerUsers></SecManagerUsers>, 
    ];

    const sideMenu = (buttonLabel,sections) => {

        const colWSmall = {span: 3, offset: 0}
        const colWMed = {span: 9, offset: 0}
        const colWFull = {span: 8, offset: 2}
        
        const style = Array(3).fill('c-primary my-2 w-100')
        style.splice(tab, 1, 'my-2 w-100')

        return(
            <>
                <Col sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                    {
                        buttonLabel.map((label, index) => (
                            <Button 
                                key={index}
                                className={style.at(index)}                        
                                onClick={(e) => (setTab(index))}
                            >{label}
                            </Button>
                        ))
                    }
                </Col>

                <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
                    <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                    {sections[tab]}            
                </Col>
            </>
        )
    }

    return (
        <div className='py-2'>
            <Row>
                <h2 className='text-white'>Gestisci Applicazione</h2>
                {
                    <LayoutSideMenu 
                        buttonLabel={TXT_BTN_LBL} 
                        sections={sections} 
                        tab={tab} 
                        setTab={setTab}
                    ></LayoutSideMenu>
                } 
            </Row>
        </div>
        
    )

}

export default ManagerScreen
