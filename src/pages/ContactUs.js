import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import office from "../assets/office.png";
import graphic from "../assets/graphics.png";
const ContactUs = () =>{
    return(
        <>
        <Header/>
            <Container>
                <Row>
                    <div className="contactWrapper">
                        <h1>Contact Us</h1>
                    </div>
                </Row>
                <Row className="contact_box">
                    <Col xl={4} className="box11">
                        <h3>New account opening</h3>
                            <p>Monday – Friday <br></br>9:00 AM - 7:00 PM</p>
                        <ul>
                            <li> 080 4719 2020</li>
                            <li> 080 4719 2020</li>
                        </ul>
                    </Col>
                    <Col xl={4} className="box11">
                    <h3>Support</h3>
                            <p>Monday – Friday <br></br>9:00 AM - 7:00 PM</p>
                        <ul>
                            <li> 080 4719 2020</li>
                            <li> 080 4719 2020</li>
                        </ul>
                    </Col>
                    <Col xl={4} className="box11">
                    <h3>Call & trade</h3>
                            <p>Monday – Friday <br></br>9:00 AM - 7:00 PM</p>
                        <ul>
                            <li> 080 4719 2020</li>
                            <li> 080 4719 2020</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="supportPortal">
                    <h2>Support portal Have a query?</h2>
                    <button>Create a ticket</button>
                </div>
            </Container>
            <Container fluid>
                <Row style={{background:"#F2F2F2"}}>
                    <div className="bestPlace">
                        <h2>We are based in Bengaluru</h2>
                        <div className="officeic">
                            <div><img src={office}/></div>
                            <div>
                            <p style={{textAlign:"left"}}>Zerodha, #153/154,<br></br>
                            4th Cross, J.P Nagar 4th Phase,<br></br>
                            Opp. Clarence Public School,<br></br>
                            Bengaluru - 560078<br></br></p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xl={6}><img src={graphic}/></Col>
                    <Col xl={6}>
                        <div className="formValid">
                            <label>Name</label><br></br>
                            <input></input><br></br>
                            <label>Mobile No</label><br></br>
                            <input></input><br></br>
                            <label>Email Id</label><br></br>
                            <input></input><br></br>
                            <label>Subject</label><br></br>
                            <textarea></textarea><br></br>
                            <button>Create a ticket</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        <Footer />
        </>
    )
}

export default ContactUs