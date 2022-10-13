import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import ProductImg from "../assets/products-kite.png"
import Productconsole from "../assets/products-console.png"
import ProductsCoin from "../assets/products-coin.png"
import Footer from "../components/Footer";
import Header from "../components/Header";
const Service = () =>{
    return(
        <>
        <Header/>
            <Container>
                <Row style={{textAlign:"center",margin:"50px"}}>
                    <h3>Technology</h3>
                    <p>Sleek, modern, and intuitive trading platforms</p>
                    <p>Check out our investment offerings →</p>
                </Row>
                <Row>
                    <Col xl={6}>
                        <img src={Productconsole}  style={{width:"100%"}}/>
                    </Col>
                    <Col xl={6} style={{margin:"auto",padding:"0px 100px"}}>
                        <h2>Kite</h2>
                        <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                        <Button>Learn more</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6} style={{margin:"auto",padding:"0px 100px"}}>
                        <h2>Console</h2>
                        <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                        <Button>Learn more</Button>
                    </Col>
                    <Col xl={6}>
                        <img src={ProductImg}  style={{width:"100%"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <img src={ProductsCoin}  style={{width:"100%"}}/>
                    </Col>
                    <Col xl={6} style={{margin:"auto",padding:"0px 100px"}}>
                        <h2>Coin</h2>
                        <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                        <Button>Learn more</Button>
                    </Col>
                </Row>
            </Container>
        <Footer/>
        </>
    )
}

export default Service