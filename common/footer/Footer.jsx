import React, { useEffect } from "react";
import "./Footer.css";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import logo from "../../assets/images/Logo-white.png"
function Footer() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div >

                <footer className="py-5 bg_footer">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Link to="/" style={{ display: 'inline-block' }}>
                                    <img src={logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
                                </Link>

                                <div className="social_icons" style={{ display: 'flex', gap: '10px' }}>
                                    <div className="icon" style={{ fontSize: '1.8em', transition: 'transform 0.2s' }}>
                                        <span style={{ color: 'white' }}>
                                            <FaFacebook />
                                        </span>
                                    </div>
                                    <div className="icon" style={{ fontSize: '1.8em', transition: 'transform 0.2s' }}>
                                        <span style={{ color: 'white' }}>
                                            <FaInstagramSquare />
                                        </span>
                                    </div>
                                    <div className="icon" style={{ fontSize: '1.8em', transition: 'transform 0.2s' }}>
                                        <span style={{ color: 'white' }}>
                                            <AiFillTwitterCircle />
                                        </span>
                                    </div>
                                    <div className="icon" style={{ fontSize: '1.8em', transition: 'transform 0.2s' }}>
                                        <span style={{ color: 'white' }}>
                                            <FaLinkedin />
                                        </span>
                                    </div>
                                    <div className="icon" style={{ fontSize: '1.8em', transition: 'transform 0.2s', borderRadius: '50%', overflow: 'hidden' }}>
                                        <span style={{ color: 'white' }}>
                                            <FaYoutube />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-item" style={{ borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    <h4>Company</h4>
                                </div>
                                <div className="footer-list">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to=""> Solar Modules</Link>
                                    </li>
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://gautamsolar.com/n-type-topcon-solar-modules/">
                                                <span className="elementor-icon-list-text">— N-type TOPCon Solar Modules</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://gautamsolar.com/mono-perc-solar-modules/">
                                                <span className="elementor-icon-list-text">— Mono PERC Solar Modules</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <li>
                                        <Link to="/contacts">Solar Power Plants</Link>
                                    </li>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-item" style={{ borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="footer-list">
                                    <li>
                                        <Link to="/blog">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms">Terms & Condition</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy"> Privacy Policy </Link>
                                    </li>



                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-item" style={{ borderBottom: '2px solid white', paddingBottom: '10px', display: 'inline-block' }}>
                                    <h4>Contact</h4>
                                </div>
                                <div className="footer-list">
                                    <p className="footer-address">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />D-120-121, Okhla Industrial Area, Phase-1, New Delhi-110020
                                    </p>
                                    <p className="footer-contact">
                                        <FontAwesomeIcon icon={faPhone} /> +91 123 456 789
                                    </p>
                                    <p className="footer-contact">
                                        <FontAwesomeIcon icon={faEnvelope} /> info@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}

export default Footer;