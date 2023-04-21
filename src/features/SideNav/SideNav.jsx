import React, { useState } from 'react'
import Offcanvas  from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom';

import Logo from '../../images/ComradeSquare.svg'

const SideNav = () =>  {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


  return (
    <>
        <button onClick={handleShow}>

        </button>
        <Offcanvas show={show} onHide={handleShow}>
            <Offcanvas.Header>
                <Offcanvas.Title>
                    <Link>
                    <img src={Logo} alt='ComradeSquare Logo'></img>
                    </Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default SideNav