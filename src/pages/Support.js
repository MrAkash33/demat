import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import support from "../assets/suport.jpg";
const Support = () => {
    return (
        <>
            <Header />
            <Container >
                <Row>
                    <img src={support} style={{margin:"40px"}}/>    
                    <h1 style={{textAlign:"center",padding:"50px"}}>To create a ticket, select a relevant topic</h1>
                    <Row>
                        <Col xl={4}>
                            <h4>Account Opening</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Online</li>
                                <li>Offline</li>
                                <li>Charges</li>
                                <li>Company, Partners and HUF</li>
                                <li>Zerodha IDFC First Bank 3-in-1 Account</li>
                                <li>Non Residents Indian (NRI)</li>
                            </ul>
                        </Col>
                        <Col xl={4}>
                            <h4>Account Opening</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Online</li>
                                <li>Offline</li>
                                <li>Charges</li>
                                <li>Company, Partners and HUF</li>
                                <li>Zerodha IDFC First Bank 3-in-1 Account</li>
                                <li>Non Residents Indian (NRI)</li>
                            </ul>
                        </Col>
                        <Col xl={4}>
                            <h4>Account Opening</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Online</li>
                                <li>Offline</li>
                                <li>Charges</li>
                                <li>Company, Partners and HUF</li>
                                <li>Zerodha IDFC First Bank 3-in-1 Account</li>
                                <li>Non Residents Indian (NRI)</li>
                            </ul>
                        </Col>
                        <Col xl={4} style={{marginTop:"30px"}}>
                            <h4>Account Opening</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Online</li>
                                <li>Offline</li>
                                <li>Charges</li>
                                <li>Company, Partners and HUF</li>
                                <li>Zerodha IDFC First Bank 3-in-1 Account</li>
                                <li>Non Residents Indian (NRI)</li>
                            </ul>
                        </Col>
                        <Col xl={4} style={{marginTop:"30px"}}>
                            <h4>Account Opening</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Online</li>
                                <li>Offline</li>
                                <li>Charges</li>
                                <li>Company, Partners and HUF</li>
                                <li>Zerodha IDFC First Bank 3-in-1 Account</li>
                                <li>Non Residents Indian (NRI)</li>
                            </ul>
                        </Col>
                        <Col xl={4} style={{marginTop:"30px"}}>
                            <h4>Account Opening</h4>
                            <ul>
                                <li>Getting Started</li>
                                <li>Online</li>
                                <li>Offline</li>
                                <li>Charges</li>
                                <li>Company, Partners and HUF</li>
                                <li>Zerodha IDFC First Bank 3-in-1 Account</li>
                                <li>Non Residents Indian (NRI)</li>
                            </ul>
                        </Col>  
                    </Row>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Support