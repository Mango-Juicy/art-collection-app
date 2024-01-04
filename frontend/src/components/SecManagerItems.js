import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Row, Col, Button, Container, Modal, Card } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'

import { handleErrorLoading } from '../global/functions'
import LayoutGrid from './main/LayoutGrid'

import FormItem from './FormItem'

import { getItemById, getItemsBySearch, setItem } from '../actions/itemActions'
import SecFilters from './SecFilters'

const TXT_BTN_ADD  = "Add New Item"
const TXT_LBL_DIALOG_ADD  = "Aggiungi Item"
const TXT_LBL_DIALOG_EDIT  = "Modifica Item"

function SecManagerItems() {

    const dispatch = useDispatch()
    
    const [showDialog, setShowDialog] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [itemToEdit, setItemToEdit] = useState({})
    const [dialogTitle, setDialogTitle] = useState({})

    const userAuth = useSelector(state => state.userAuth)
    const { userToken } = userAuth 
    const itemList = useSelector(state => state.itemList)
    const { error, loading, items } = itemList  
    const responseSetItem = useSelector(state => state.responseSetItem)    
    const categoryList = useSelector(state => state.categoryList)
    const { categories } = categoryList 

    const columnSetting = [
        {
            key: "image",
            label: "Image",
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1
        },
        {
            key: "name",
            label: "Name",
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3
        },
        {
            key: "description",
            label: "Description",
            sm: 5,
            md: 5,
            lg: 5,
            xl: 5
        },
        {
            key: "year",
            label: "Year",
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1
        },
        {
            key: "button",
            label: "Edit",
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1
        }
    ];

    useEffect(() => {
        dispatch(getItemById())
    }, [])

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
        setDialogTitle(TXT_LBL_DIALOG_EDIT)
        setItemToEdit(item)
        setShowDialog(true)
    }

    const handleCancel = (e) => {
        setShowDialog(false) 
        setShowResponse(false)         
    }

    const handleSubmit = (state,e) => {

        const formData = new FormData();
        formData.append('id', state.id);
        formData.append('description', state.description);
        formData.append('name', state.name);
        formData.append('image', state.image);
        formData.append('brand', state.brand);
        formData.append('columnsNumber', state.columnsNumber);
        formData.append('idCategory', state.idCategory);
        formData.append('tag', state.tag);
        formData.append('price', state.price);
        formData.append('year', state.year);
        formData.append('available', state.available);

        dispatch(setItem(formData, userToken.access))
        setShowResponse(true)
    }

    const handleAdd = () => {
        setDialogTitle(TXT_LBL_DIALOG_ADD)
        setShowDialog(true)
        setItemToEdit("")        
    }

    //Paging
    const handleNextPage = (item) => {
        // TODO
    }
    const handlePreviousPage = (item) => {
        // TODO
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

    // Paging
    const paging = () => {
        return(
            <Row className='text-white'>
                <Col></Col>
                <Col xs="auto">
                    <Button      
                        variant="dark" 
                        className='text-white c-orange py-1 px-2 fs-6 m-0' 
                        id="button-2"   
                        onClick={() => handlePreviousPage()}                                 
                        >{'<'}
                    </Button>  
                </Col>
                <Col className="py-1" xs="auto">
                    <p className='my-1'>
                        1 - 18    
                    </p>                       
                </Col>
                <Col xs="auto">
                    <Button      
                        variant="dark" 
                        className='text-white c-orange py-1 px-2 fs-6 m-0' 
                        id="button-2"   
                        onClick={() => handleNextPage()}                                 
                        >{'>'}
                    </Button>    
                </Col>
                <Col  className="py-1" xs="auto">
                    <p className='my-1'>
                        di {items.length} elementi     
                    </p>                       
                </Col>
            </Row>
        )
    }
    
    // Form Item
    const modal = () => {
        return(
            <Modal size="lg" show={showDialog} onHide={handleCancel}>
                <div className='c-primary'>
                {
                    <FormItem 
                        title={dialogTitle}
                        state={itemToEdit}
                        categories={categories}
                        handleSubmit={handleSubmit}
                        handleCancel={handleCancel}
                        responseSetItem={responseSetItem}
                        showResponse={showResponse}
                    ></FormItem>
                }
                </div>  
            </Modal>
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
                            data={items}
                            handleEdit={handleEdit}
                        ></LayoutGrid>
                    )
                }      
            </div>
            {modal()}
        </>
    )

}

export default SecManagerItems
