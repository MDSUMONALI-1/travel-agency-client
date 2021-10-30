import React from 'react';
import {  Container,  Navbar } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink  to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink   to="/services">umrah</NavLink>
                        <NavLink  to="/contact">contact</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;