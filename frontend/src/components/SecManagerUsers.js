import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container, Modal } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import { handleErrorLoading } from '../global/functions'
import LayoutGrid from './main/LayoutGrid'

import { getItemById, getItemsBySearch } from '../actions/itemActions'
import { getUser, setUser } from '../actions/userActions'
import SecFilters from './SecFilters'
import FormUser from './FormUser'

const TXT_BTN_ADD  = "Add New Item"

function SecManagerUsers() {

    const dispatch = useDispatch()
    
    const [showDialog, setShowDialog] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({})
    const [title, setTitle] = useState("")

    const userAuth = useSelector(state => state.userAuth)
    const { userToken } = userAuth 

    const userList = useSelector(state => state.userList)
    const { error, loading, users } = userList   
    
    const columnSetting = [
        {
            key: "username",
            label: "Username",
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3
        },
        {
            key: "first_name",
            label: "Name",
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4
        },
        {
            key: "email",
            label: "Email",
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3
        },
        {
            key: "button",
            label: "Edit",
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2
        }
    ];


    useEffect(() => {
        dispatch(getUser(userToken.access))
    }, [])

    //TODO: search user
    const searchHandler = (state,e) => {
        e.preventDefault()
        if (
              state.query?.length > 2 || 
              state.yearFrom !== undefined ||
              state.yearTo !== undefined
           ) {
          const params = {
            query: state.query,
            yearFrom: state.yearFrom,
            yearTo: state.yearTo
          }
          
          dispatch(
            getItemsBySearch(params)
          )
        }else{
            dispatch(getItemById())
        }
    }

    const handleEdit = (item) => {
        setItemToEdit(item)
        setTitle("Modifica Utente")
        setShowDialog(true)
    }

    const handleCancel = (e) => {
        setShowDialog(false)
    }

    const handleSubmit = (state,e) => {
        setShowDialog(false)

        const formData = new FormData();
        formData.append('id', state.id);
        formData.append('username', state.username);
        formData.append('first_name', state.first_name);
        formData.append('last_name', state.last_name);
        formData.append('email', state.email);
        formData.append('password', state.password);

        dispatch(setUser(formData, userToken.access))
        dispatch(getUser(userToken.access))
    }

    const handleAdd = () => {
        setItemToEdit("") 
        setTitle("Aggiungi Utente")
        setShowDialog(true)       
    }


    
    // INTERFACE
    // Title, Add, Filters
    const header = () => {
        return(
            <>
                <Row>                    
                    <Col>
                        <h4 className='text-white mt-2 mb-0'>Items</h4>                                                     
                    </Col>
                    <Col className='text-end'>
                    
                        <Button      
                            variant="dark" 
                            className='text-white c-orange py-1 fs-6 m-0' 
                            id="button-2"   
                            onClick={() => handleAdd()}                                 
                            >Aggiungi
                        </Button>                                                     
                    </Col>
                </Row>
            
                
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>                
                <SecFilters submitHandler={searchHandler}></SecFilters>
                <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
            </>
        )
    }



    return (                  
        <>           
            <div className='c-primary p-3 my-2'>
            {header()}

            {   
                    //GRID
                    handleErrorLoading(
                        error,
                        loading,
                        <LayoutGrid 
                            columns={columnSetting}
                            data={users}
                            handleEdit={handleEdit}
                        ></LayoutGrid>
                    )
                }  
            </div>

            <Modal size="lg" show={showDialog} onHide={handleCancel}>
                <div className='c-primary'>
                    <FormUser 
                        state={itemToEdit}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel}
                        title={title}
                    >
                    </FormUser>
                </div>  
            </Modal>
        </>  
    )

}

export default SecManagerUsers
