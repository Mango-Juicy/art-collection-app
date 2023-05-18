import React from 'react'


function SecManagerAspect({configInfo}) {

    return (
        <div className='c-primary p-3 my-2'>
            <h4 className='text-white'>Aspetto</h4>
            <hr className='my-2' style={{height: "2px", backgroundColor: "white"}}/>
            <p>Colore Primario: {configInfo.colorPrimary}</p>
            <p>Colore Secondario: {configInfo.colorSecondary}</p>
            <p>Colore Accent: {configInfo.colorAccent}</p>
            <p>Pulsanti Home Page: </p>
        </div>
    )

}

export default SecManagerAspect
