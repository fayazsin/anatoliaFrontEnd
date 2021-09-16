import React, { useState } from 'react'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import logo from "../images/logo.png"
import { Icon } from 'semantic-ui-react';
import UserMenu from '../menus/UserMenu';
import AdminMenu from '../menus/AdminMenu';

import "./Header.css";
import { useStateValue } from '../StateProvider';

const Header = () => {

    return (
        <div className="nav-container">
            <Container fluid className="nav-tab-fluid">
                <Container className="nav-top">
                    <Row>
                        <Col className="d-none d-md-block ">
                            <TabNav />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="nav-middle">
                <Row>
                    <Col>
                        <Link to="/">
                            <img className="nav-logo" src={logo} alt="" />
                        </Link>
                    </Col>
                    <Col className="d-flex align-times-center justify-content-end">
                        <MiddleNav />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="nav-bottom">
                    <Col>
                        <NavBottom />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
const TabNav = () => {
    const history = useHistory();
    const handleNavClick = (eventKey) => {
        history.push(`/${eventKey}`)
    }
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="advantage" onSelect={handleNavClick}>
                <Nav.Item>
                    <Nav.Link eventKey="advantages">Advantages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="mobile">Mobile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="signin" >
                        Sign In
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="register" >
                        Register
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )



}
const MiddleNav = () => {
    const [{ userInfo }, dispatch] = useStateValue();
    return (
        <div>
            {!userInfo && (
                <Nav className="d-flex justify-content-end">
                    <Nav.Item className="me-3">
                        <Nav.Link bsPrefix="middle-navbar" as={Link} to="/login">
                            <Icon
                                name="user"
                                circular
                                size="large"
                                className="d-block mb-2 ms-1"
                            ></Icon>
                            Sign In
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link bsPrefix="middle-navbar" as={Link} to="/register">
                            <Icon
                                name="unlock alternate"
                                circular
                                size="large"
                                className="d-block mb-2 ms-2"
                            ></Icon>
                            Register
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            )}
            {userInfo && userInfo.user && !userInfo.user.isAdmin && <UserMenu />}
            {userInfo && userInfo.user && userInfo.user.isAdmin && <AdminMenu />}
        </div >
    )
}

const NavBottom = () => {
    const history = useHistory();
    const [activeKey, setActiveKey] = useState("home")
    const handleItemClick = (eventKey) => {
        eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
        setActiveKey(eventKey)
    }
    return (
        <div>
            <Navbar expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="me-auto"
                            activeKey={activeKey}
                            onSelect={handleItemClick}>
                            <Nav.Link className="nav-bottom-links" eventKey="about">About</Nav.Link>
                            <Nav.Link className="nav-bottom-links" eventKey="product">Product</Nav.Link>
                            <Nav.Link className="nav-bottom-links" eventKey="package">Package</Nav.Link>
                            <Nav.Link className="nav-bottom-links" eventKey="location">Location</Nav.Link>
                            <Nav.Link className="nav-bottom-links" eventKey="contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}




export default Header
