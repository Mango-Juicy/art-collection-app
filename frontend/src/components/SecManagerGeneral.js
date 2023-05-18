import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'

import Loader from './main/Loader'
import Message from './main/Message'

import { getConfiguration } from '../actions/itemActions'
import SecManagerInfo from './SecManagerInfo'
import SecManagerAspect from './SecManagerAspect'


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

    // TODO: Export this function as global
    const handleErrorLoading = (error, loading, section) => {
        return(
            error ? <Message variant='danger'>{error}</Message>
            : (
                loading ? <Loader/>
                :   section
            )
        )
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

    // Safe content 
    const content = () => {
        return(
            <div className='text-white'>

                <SecManagerInfo configInfo={configInfo}></SecManagerInfo>

                <SecManagerAspect configInfo={configInfo}></SecManagerAspect>

            </div>
        )
    }

    return (                  
        handleErrorLoading(
            error,
            loading,
            content()
        )      
    )

}

export default SecManagerGeneral
