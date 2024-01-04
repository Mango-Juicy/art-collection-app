import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import Loader from '../components/main/Loader'
import Message from '../components/main/Message'


// USEFUL FUNCTIONS

// Handle Configurations
export const handleConfig = (configs ,setting, settingField) => {
    const value = configs
        ?.filter(config => 
          config.setting === setting && 
          config.settingField === settingField)
        .map(config => 
          config.value
    )
    return value.toString()
}

// Get idConfig from key 
export const getIdConfig = (configs, settingField) => {
    const id = configs
        ?.filter(config => 
            config.settingField === settingField)
        .map(config => 
            config.id
    )
    return id
}

// Safe Content
export const handleErrorLoading  = (error, loading, content) => {
      
    return(
        error ? <Message variant='danger'>{error}</Message>
        : (
            loading ? <Loader/>
            :   content
        )
    )

}

// TODO: interface library
// Layout Side Menu and Sections
class LayoutSideMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {   

    const colWSmall = {span: 3, offset: 0}
    const colWMed = {span: 9, offset: 0}
    const colWFull = {span: 8, offset: 2}

    
    const style = Array(3).fill('c-primary my-2 w-100')
    style.splice(this.props.tab, 1, 'my-2 w-100')

    return(
        <>
            <Col sm={colWFull} md={colWSmall} lg={colWSmall} xl={colWSmall}>
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                {
                    this.props.buttonLabel.map((label, index) => (
                        <Button 
                            key={index}
                            className={style.at(index)}                        
                            onClick={(e) => (this.props.setTab(index))}
                        >{label}
                        </Button>
                    ))
                }
            </Col>

            <Col sm={colWFull} md={colWMed} lg={colWMed} xl={colWMed}>
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
                {this.props.sections[this.props.tab]}            
            </Col>
        </>
    )
}

}
export default LayoutSideMenu

