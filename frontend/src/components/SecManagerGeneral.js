import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from './main/Loader'
import Message from './main/Message'

import { getConfiguration } from '../actions/itemActions'
import SecManagerInfo from './SecManagerInfo'


function SecManagerGeneral({errorConfig, loadingConfig, configInfo}) {


    // TODO: Export this function as global
    const handleErrorLoading = (error, loading, content) => {
        return(
            error ? <Message variant='danger'>{error}</Message>
            : (
                loading ? <Loader/>
                :   content
            )
        )
    }
    
    // Safe content 
    const content = () => {
        return(
            <div className='text-white'>

                <SecManagerInfo configInfo={configInfo}></SecManagerInfo>

            </div>
        )
    }

    return (                  
        handleErrorLoading(
            errorConfig,
            loadingConfig,
            content()
        )      
    )

}

export default SecManagerGeneral
