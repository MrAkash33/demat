import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import search from "../assets/Search.png";
const Header = () => {
    return (
        <>
            <Container fluid className="wrapperHeader">
                <Row>
                    <div>
                        <Container>
                            <Row>
                                <div className="headerWrapper">
                                    <div className="logo_w">
                                        <img src={Logo} />
                                    </div>
                                    <div className="menuItem">
                                        <ul>
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Service</li>
                                            <li>Support</li>
                                            <li>Signup</li>
                                            <img src={search} />
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Header