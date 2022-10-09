import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutBanner from "../assets/aboutBanner.png"
import item from "../assets/Ellipse1.png"
import item1 from "../assets/Ellipse 3.png"
import item2 from "../assets/Ellipse 2 (1).png"
import item3 from "../assets/Ellipse 3 (1).png"
import item4 from "../assets/Ellipse 2.png"

const About = () => {
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <div className="contentABout">
                        <img src={AboutBanner} />
                        <h1>ABOUT US</h1>
                        <p>We pioneered the discount broking model in India. Now, we are breaking ground with our technology.</p>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="aboutsection">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec justo est, pulvinar a mauris et, iaculis vulputate  magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros. Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo. Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex, ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae sagittis leo, eu mattis purus. Nullam id nisi sapien.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec justo est, pulvinar a mauris et, iaculis vulputate  magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros. Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo. Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex, ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae sagittis leo, eu mattis purus. Nullam id nisi sapien.
                        </p>
                        <Row>
                            <Col xl={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo est, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros. Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo. Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex, ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae sagittis leo, eu mattis purus. Nullam id nisi sapien.</p>
                            </Col>
                            <Col xl={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo est, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros. Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo. Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex, ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae sagittis leo, eu mattis purus. Nullam id nisi sapien.</p>
                            </Col>
                            <Col xl={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo est, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros. Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo. Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex, ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae sagittis leo, eu mattis purus. Nullam id nisi sapien.</p>
                            </Col>
                            <Col xl={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo est, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros. Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo. Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex, ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae sagittis leo, eu mattis purus. Nullam id nisi sapien.</p>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row>
                    <div className="section2">
                        <h2>Our People</h2>
                    </div>
                    <Row className="peopleitem">
                        <Col xl={4} className="firstItem">
                            <img src={item} />
                            <h2>Lorem Hue</h2>
                            <h5>CEO</h5>
                        </Col>
                        <Col xl={8}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo est, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros.  Mauris nunc tellus, tempor sed nibh id, eleifend feugiat magna. Quisque in venenatis leo.
                                Morbi tincidunt purus massa, at cursus urna condimentum at. In bibendum hendrerit ex,  ac convallis mauris lobortis nec. Ut scelerisque nec sem mattis convallis. Vivamus vitae  sagittis leo, eu mattis purus. Nullam id nisi sapien.
                            </p>
                        </Col>
                    </Row>
                    <Row className="inpoeple">
                        <Col xl={6}>
                            <Row>
                                <Col xl={4} className="firstSecond">
                                    <img src={item1} />
                                    <h2>Lorem Hue</h2>
                                    <h5>CEO</h5>
                                </Col>
                                <Col xl={8} style={{margin:"auto"}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecest, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros.  Mauris nunc tellus,
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6}>
                            <Row >
                                <Col xl={8} style={{margin:"auto"}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecest, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros.  Mauris nunc tellus,
                                    </p>
                                </Col>
                                <Col xl={4} className="firstSecond">
                                    <img src={item2} />
                                    <h2>Lorem Hue</h2>
                                    <h5>CEO</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="inpoeple">
                        <Col xl={6}>
                            <Row>
                                <Col xl={4} className="firstSecond">
                                    <img src={item3} />
                                    <h2>Lorem Hue</h2>
                                    <h5>CEO</h5>
                                </Col>
                                <Col xl={8} style={{margin:"auto"}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecest, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros.  Mauris nunc tellus,
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6}>
                            <Row >
                                <Col xl={8} style={{margin:"auto"}}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecest, pulvinar a mauris et, iaculis vulputate magna. Donec fermentum arcu tincidunt, congue metus in, sagittis eros.  Mauris nunc tellus,
                                    </p>
                                </Col>
                                <Col xl={4} className="firstSecond">
                                    <img src={item4} />
                                    <h2>Lorem Hue</h2>
                                    <h5>CEO</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About