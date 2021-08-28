import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../images/logo.png'
const Footer = () => {
    return (
        <footer className="footer">
            <Col sm={12} md={6} lg={4} className="footer-left">
                <Row>
                    <p className="about">
                        <span>BANK OF ANATOLIA</span> Historical Banking Experience with modern technogical trends</p>
                </Row>
                <Row className="icons">
                    <Link to=""><i className="fa fa-facebook"></i> </Link>
                    <Link to=""><i className="fa fa-twitter"></i> </Link>
                    <Link to=""><i className="fa fa-linkedin"></i> </Link>
                    <Link to=""><i className="fa fa-google-plus"></i> </Link>
                    <Link to=""><i className="fa fa-instagram"></i> </Link>
                </Row>
            </Col>

            <Col sm={12} md={6} lg={4} className="footer-center">
                <div>
                    <i className="fa fa-map-marker" />
                    <p>
                        <span> Street name and number</span>City, Country
                    </p>
                </div>
                <div>
                    <i className="fa fa-phone" />
                    <p>
                        (+00)0000 000 000
                    </p>
                </div>
                <div>
                    <i className="fa fa-envelope" />
                    <p>
                        email@bankofanatolia.com
                    </p>
                </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="footer-right">
                <img src={logo} alt="logo" style={{ height: "100px" }} />
                <p className="menu">
                    <Link to="/">Home</Link> |  <Link to="/about">About</Link> |  <Link to="/Package">Package</Link> |
                    <Link to="/location">Location</Link> |  <Link to="/contact">Contact</Link>
                </p>
                <p className="name" > Bank of Anatolia &copy; 2021</p>
            </Col>

        </footer>
    )
}

export default Footer
