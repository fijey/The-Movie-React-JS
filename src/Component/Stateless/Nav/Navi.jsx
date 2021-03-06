import React, {useState, useEffect} from 'react';
import { Navbar, Row, Nav, Col } from 'react-bootstrap';
import API from '../../../services';
import '../Nav/Navi.css'


const Navi = () => {

    return (
  
        <Navbar style={{position: 'absolute', width: '100%'}} sticky="top" fixed="top" className="navbar bg-transparent-black" collapseOnSelect expand="md" variant="dark">
                    <Navbar.Brand href="#home">Kuy Watch</Navbar.Brand>
        </Navbar>
    )
}


export default Navi;
