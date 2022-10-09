import React from "react";
import { Button, Container,Row } from 'react-bootstrap';
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Telegram from "../assets/telegram.svg"
import Twitter from "../assets/twitter.svg"
import Youtube from "../assets/youtub.svg"
const StripHeader = () =>{
    return(
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
        </>
    )
}

export default StripHeader