import React from "react";
import { Container, Row ,Button} from "react-bootstrap";
import Logo from "../assets/Logo.png";
import search from "../assets/Search.png";
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Telegram from "../assets/telegram.svg"
import Twitter from "../assets/twitter.svg"
import Youtube from "../assets/youtub.svg"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Container fluid>
                <Row>
                <div className="stripHeader">
                    <ul>
                        <li><img src={Facebook} /></li>
                        <li><img src={Instagram} /></li>
                        <li><img src={Telegram} /></li>
                        <li><img src={Twitter} /></li>
                        <li><img src={Youtube} /></li>
                    </ul>
                </div>
                </Row>
            </Container>
            <Container fluid className="wrapperHeader">
                <Row>
                    <div>
                        <Container>
                            <Row>
                                <div className="headerWrapper">
                                    <div className="logo_w">
                                    <Link exact to="/"><img src={Logo} /></Link>
                                    </div>
                                    <div className="menuItem ">
                                        <ul>
                                            <NavLink to="/about"><li>About</li></NavLink>
                                            <NavLink to="/contact"><li>Contact Us</li></NavLink>
                                            <NavLink to="/service"><li>Service</li></NavLink>
                                            <NavLink to="/support"><li>Support</li></NavLink>
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
