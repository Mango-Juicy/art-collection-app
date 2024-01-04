import React, { useState } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'


class LayoutGrid extends React.Component {

    constructor(props) {
        super(props);
        
        //default
        const defColumns = [
            {
                key: "id",
                label: "Id",
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4
            },
            {
                key: "nome",
                label: "Nome",
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4
            },
            {
                key: "cognome",
                label: "Cognome",
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4
            }
        ];
        const defData = [
            {
                id: 1, 
                nome: "Paolo", 
                cognome: "Rossi", 
            },
            {
                id: 2, 
                nome: "Mario", 
                cognome: "Bianchi", 
            },
            {
                id: 3, 
                nome: "Nicola", 
                cognome: "Verdi", 
            }
        ]

        this.state = {
            columns: this.props.columns === "" ? defColumns : this.props.columns,
            data: this.props.data === "" ? defData : this.props.data
        }
    }

    render() {   

        const columnType = (item, column) => {

            switch (column.key) {
            case 'image':
                return <Card.Img className="border-0" src={item[column.key]} id='img' />;
            case 'button':
                return (
                    <Button
                        variant="dark"
                        className='text-white c-secondary py-1 fs-6'
                        id="button-2"
                        onClick={() => this.props.handleEdit(item)}
                    >Modifica
                    </Button>
                );
            default:
                return <p className='m-2'>
                        {item[column.key].toString().slice(0,50)}
                    </p>;
            }
        }

    return(
        <>       
            <Row className='m-0 text-white c-primary'>   
                {
                    this.state.columns.map((column, index) => (
                        <Col key={index} className='p-0' sm={column.sm} md={column.md} lg={column.lg} xl={column.xl}>
                            <p className='m-2'>{column.label}</p>                                                       
                        </Col>    
                    ))
                }
            </Row>
            <hr className='my-2  text-white' style={{height: "1px"}}/>
            {                
                this.state.data.map((item, index) => (       
                    <Row className='m-1 text-white' key={index} >     
                        {
                            this.state.columns.map((column, index) => (
                                <Col key={index} className='p-0' sm={column.sm} md={column.md} lg={column.lg} xl={column.xl}>
                                    {columnType(item,column)}
                                </Col>
                            ))
                        }        
                        <hr className='my-2' style={{height: "1px"}}/>
                    </Row>
                ))
            }            
        </>
    )
}

}

export default LayoutGrid