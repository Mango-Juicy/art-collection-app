import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'


function SecManagerInfo({configInfo}) {  
    const colWIcon = {span: 3, offset: 0} 
    const colWTitle = {span: 9, offset: 0} 

    return (
        <div className='c-primary p-3 my-2'>
            <Row>
                <Col sm={colWTitle} md={colWTitle} lg={colWTitle} xl={colWTitle}>
                    <h4 className='text-white'>Informazioni Generali</h4>
                </Col>
                <Col sm={colWIcon} md={colWIcon} lg={colWIcon} xl={colWIcon}>
                    <Button                     
                        type='submit'
                        variant="dark" 
                        className='text-white c-orange w-100 py-1 fs-6' 
                        id="button-addon2"
                        ><i className="bi bi-pencil"></i> Modifica
                    </Button>
                </Col>
            </Row>
            
            <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>

            <p>Title: {configInfo.title}</p>
            <p>Contatti email: {configInfo.email}</p>
            <p>Contatti telefono: {configInfo.phone}</p>

        </div>
    )

}

export default SecManagerInfo
