import React, { useState } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setConfiguration, getConfiguration } from '../actions/itemActions'
import FormManagerInfo from './FormManagerInfo'

const LBL_BTN_MODIFY = "Modifica"
const LBL_BTN_CANCEL = "Annulla"


function SecManagerInfo({configInfo}) {  
    const dispatch = useDispatch()
    const [showDialog, setShowDialog] = useState(false);
    const handleClose = () => setShowDialog(false);
    
    // CONFIGURATION
    const configList = useSelector(state => state.configList)
    const { configs } = configList  

    // TODO: Export this function as global
    const idConfig = (settingField) => {
        const id = configs
            ?.filter(config => 
              config.settingField === settingField)
            .map(config => 
              config.id
        )
        return id
    }

    // TODO: confirmation message
    const handleUpdate = (e) => {
        dispatch(getConfiguration()) 
        setShowDialog(false)
    }

    const handleSubmit = (state,e) => {
        e.preventDefault()           
        
        for (const [key, value] of Object.entries(state)) {
            const data = {
                id: idConfig(key),
                value: value
            }
            dispatch(setConfiguration(data)) 
        }
        setShowDialog(true);        
    }

    return (
        <>
            <FormManagerInfo 
                state={configInfo} 
                handleSubmit={handleSubmit}
            >
            </FormManagerInfo>

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
        </>       
    )
}

export default SecManagerInfo
