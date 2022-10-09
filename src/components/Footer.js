import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Logo from "../assets/Logo.png"
const Footer = () =>{
    return(
        <>
            <Container fluid className="footerWrapper">
                    <Container>
                        <Row>
                            <Col xl={3}>
                                    <span><img src={Logo}/></span>
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Disclouser</li>
                                    <li>Terms & Conditions</li>
                                    <li>Policies & procedures</li>
                                    <li>For investor's attention</li>
                                    <li>Investor charter</li>
                                </ul>
                            </Col>
                            <Col xl={3}>
                                <h4>Company</h4>
                                <ul>
                                    <li>Products</li>
                                    <li>Pricing</li>
                                    <li>Refreal Program</li>
                                    <li>Careers</li>
                                    <li>Demat Account</li>
                                    <li>Press & Media</li>
                                    <li>Your Cares</li>
                                </ul>
                            </Col>
                            <Col xl={3}>
                                <h4>Support</h4>
                                <ul>
                                    <li>Contact</li>
                                    <li>Support portal</li>
                                    <li>List of Charges</li>
                                    <li>Downloads & resources</li>
                                    <li>Videos</li>
                                    <li>Products</li>
                                    <li>Market review</li>
                                </ul>
                            </Col>
                            <Col xl={3}>
                                <h4>Account</h4>
                                <ul>
                                    <li>Open an Account</li>
                                    <li>Fund Transfer</li>
                                    <li>60 Days Challenge</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div className="footerContent">
                            <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 
                                Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars 
                                Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to 
                                complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                            </p>
                            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                        </div>
                    </Container>
                   <Row>
                   <div className="footerStrip">
                        © 2010 - 2022, Zerodha Broking Ltd. All rights reserved.
                    </div>   
                    </Row>               
            </Container>
        </>
    )
}

export default Footer