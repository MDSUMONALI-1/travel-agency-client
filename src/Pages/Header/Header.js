import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" >
                <Container className="header">
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link  to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link   to="/services">Umrah-pakages</Link>
                        <Link  to="/contact">Contact-US</Link>
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;