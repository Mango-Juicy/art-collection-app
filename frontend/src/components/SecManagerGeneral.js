import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'

import { Button, Modal } from 'react-bootstrap'

import { handleErrorLoading,  getIdConfig} from '../global/functions'

import { setConfiguration, getConfiguration } from '../actions/itemActions'

import FormGeneral from './FormGeneral'


function SecManagerGeneral({errorConfig, loadingConfig, configInfo}) {

    const dispatch = useDispatch()
    const [showDialog, setShowDialog] = useState(false);
    const handleClose = () => setShowDialog(false);
    
    // CONFIGURATION
    const configList = useSelector(state => state.configList)
    const { configs } = configList  

    // TODO: confirmation message
    const handleUpdate = (e) => {
        dispatch(getConfiguration()) 
        setShowDialog(false)
    }

    const handleSubmit = (state,e) => {
        e.preventDefault()           
        
        for (const [key, value] of Object.entries(state)) {
            const data = {
                id: getIdConfig(configs,key),
                value: value
            }
            dispatch(setConfiguration(data)) 
        }
        setShowDialog(true);        
    }
    
    // Safe content 
    const content = () => {
        return(
            <div className='text-white'>
                <FormGeneral 
                    state={configInfo} 
                    handleSubmit={handleSubmit}
                >
                </FormGeneral>

                <Modal show={showDialog} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Applicazione Aggiornata</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Le modifiche sono state salvate con successo. Cliccare su Aggiorna per vedere i risultati.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleUpdate}>
                            Aggiorna
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }


    return (                  
        handleErrorLoading(
            errorConfig,
            (loadingConfig || configInfo.title === ""),
            content()
        )      
    )

}

export default SecManagerGeneral
