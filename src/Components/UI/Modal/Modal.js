import React from 'react';

import './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({show,modalClosed,children}) => {
    return(
        <div>
            <Backdrop show={show} clicked={modalClosed}/>
            <div className="Modal"
            style={{transform: show ? 'translateY(0)' : 'translateX(-100vh)', opacity: show ? '1' : 0}}>
            {children}
        </div>

        </div>
    )
}


export default Modal