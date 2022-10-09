import React from "react";
import banner from "../assets/bannerNew.svg"
import item from "../assets/item2.png"
import { Container,Row,Col } from "react-bootstrap";
const Home = () =>{
    return(
        <Container>
            <Row>
                <div className="banner">
                    <img src={banner} />
                    <div className="bannerContent">
                        <h1>No. 1  Broker In India</h1>
                        <p>How to Invest Money: Choosing the Best Way To Invest for You</p>
                        <button>Sign up now</button>
                    </div>
                </div>
            </Row>
            <Row>
                <Col xl={6}>
                    <div>
                        <h2>Largest stock broker in India</h2>
                        <p>1+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Stocks & IPOs</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                            <li>Bonds and Govt. Securities</li>
                            <li>Direct mutual funds</li>
                            <li>Stocks & IPOs</li>
                        </ul>
                    </div>
                </Col>
                <Col xl={6}>
                    <img src={item}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home