import React from 'react';

export default function Footer() {
    return (
        <section>
            <div className="container-fluid position-relative  footer-1st">
                <div className="d-flex">
                    <div className="float-left footer-menu">
                        <ul className="d-flex">
                            <li>
                                <a href="_blank">About Us</a>
                            </li>
                            <li>
                                <a href="_blank">Contact Us</a>
                            </li>
                            <li>
                                <a href="_blank">Term &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="_blank">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="float-right footer-icon position-absolute">
                        <a href="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a href="_blank"><i className="fab fa-google-plus-square"></i></a>
                        <a href="_blank"><i className="fab fa-twitter-square"></i></a>
                        <a href="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="_blank"><i className="fab fa-pinterest-square"></i></a>
                        <a href="_blank"><i className="fab fa-youtube-square"></i></a>
                        <a href="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="_blank"><i className="fas fa-envelope-square"></i></a>
                        <a href="_blank"><i className="fab fa-buysellads"></i></a>
                    </div>
                </div>
            </div>
            <div className="container-fluid position-relative footer-2nd">
                <div className="row footer-2nd-contain">
                    <div className="position-absolute footer-2nd-left">
                        All tile designs of Villa Lagoon Tile and tile color combinations in these and in historical tile designs are exclusive to Villa Lagoon Tile and it is strictly prohibited for others to copy them.
                    </div>
                    <div className="position-absolute footer-2nd-right">
                        ©2017-2026  "Villa Lagoon Tile" and "VLT" are Trademarks
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <br></br>

        </section>
    )
}