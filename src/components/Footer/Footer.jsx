import React from 'react';
import './Footer.css';
import { color } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            {/* SVG Wave */}
            <div className="footer-wave">
                <svg
                    className="footer-wave-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="footerWaveGradient" gradientTransform="rotate(15)">
                            <stop offset="0%" stop-color="#020314" />
                            <stop offset="50%" stop-color="#2a2a2a" />
                            <stop offset="100%" stop-color="#ffd700" stop-opacity="0.05" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,
    172-41.86,82.39-16.72,168.19-17.73,
    250.45-.39C823.78,31,906.67,72,
    985.66,92.83c70.05,18.48,146.53,
    26.09,214.34,3V0H0V27.35A600.21,
    600.21,0,0,0,321.39,56.44Z"
                        fill="url(#footerWaveGradient)"
                    />
                </svg>

            </div>

            {/* Footer Content */}
            <div className="footer-container">
                <div className="footer-column">
                    <h2 className="footer-title">ABOUT</h2>
                    <p>
                        Betting Casino Guide is your trusted companion in discovering
                        top betting platforms. We aim to deliver safe, informed choices.
                    </p>
                </div>

                <div className="footer-column">
                    <h2 className="footer-title">RESOURCES</h2>
                    <ul>
                        <li><a href="/TermsAndConditions" style={{ color: 'inherit', textDecoration: 'none' }}>Website Guidelines</a></li>
                        <li><a href="/TermsAndConditions" style={{ color: 'inherit', textDecoration: 'none' }}>Tips & Triks</a></li>
                        <li><a href="/TermsAndConditions" style={{ color: 'inherit', textDecoration: 'none' }}>Photography</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2 className="footer-title">INFORMATION</h2>
                    <ul>
                        <li><a href="/TermsAndConditions" style={{ color: 'inherit', textDecoration: 'none' }}>Guides & Reviews</a></li>
                        <li><a href="/TermsAndConditions" style={{ color: 'inherit', textDecoration: 'none' }}>How To Start</a></li>
                       <li><a href="/TermsAndConditions" style={{ color: 'inherit', textDecoration: 'none' }}>Legal Policies</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h2 className="footer-title">CONTACT</h2>
                    <ul>
                        <li>Email: support@casino.com</li>
                    </ul>
                    <div className="footer-icons">
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Email Subscribe */}
            <div className="footer-subscribe">
                <form className="footer-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

        </footer>
    );
};

export default Footer;
