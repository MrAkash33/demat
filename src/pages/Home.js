import React from "react";
import banner from "../assets/bannerNew.svg"
import item from "../assets/item2.png"
import item3 from "../assets/item3.png"
import box1 from "../assets/3012.png"
import box2 from "../assets/3012 (1).png"
import box3 from "../assets/3012 (2).png"
import box4 from "../assets/3012 (3).png"
import { Container,Row,Col } from "react-bootstrap";
const Home = () =>{
    return(
        <Container>
            <Row>
                <div className="banner">
                    <img style={{padding:"10px"}}src={banner} />
                    <div className="bannerContent">
                        <h1>No. 1  Broker In India</h1>
                        <p>How to Invest Money: Choosing the Best Way To Invest for You</p>
                        <button>Sign up now</button>
                    </div>
                </div>
            </Row>
            <Row className="mt-5">
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
                <Col xl={6} style={{textAlign:"center"}}> 
                    <img src={item}/>
                </Col>
            </Row>
            <Row>
              <div className="section2">
                    <h2>The Brouin Universe</h2>
                    <p>A whole ecosystem of modern investment apps tailored to specific needs, built from the ground up</p>
                    <img src={item3} />
              </div>
            </Row>
            <Row>
              <div className="section2">
                    <h2>Money Exchange</h2>
                    <Row className="mt-5 boxex">
                        <Col xl={3}>
                            <div className="box1">
                                <img src={box1} />
                                <h4>Money Exchange</h4>
                                <span>Learning how to invest money might seem scary, but it's easier than you think, and you can start no matter how much you have saved.</span>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="box1">
                                <img src={box2} />
                                <h4>Money Exchange</h4>
                                <span>Learning how to invest money might seem scary, but it's easier than you think, and you can start no matter how much you have saved.</span>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="box1">
                                <img src={box3} />
                                <h4>Money Exchange</h4>
                                <span>Learning how to invest money might seem scary, but it's easier than you think, and you can start no matter how much you have saved.</span>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="box1">
                                <img src={box4} />
                                <h4>Money Exchange</h4>
                                <span>Learning how to invest money might seem scary, but it's easier than you think, and you can start no matter how much you have saved.</span>
                            </div>
                        </Col>
                    </Row>
              </div>
            </Row>
            <Row>
              <div className="signup">
                    <h2>Open a Demat account</h2>
                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button>Sign up now</button>
              </div>
            </Row>
        </Container>
    )
}

export default Home