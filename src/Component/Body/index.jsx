import React, { useState } from "react";

export default function Body(props) {

    return (
        <section>
            <div className="container-fluid">
                <div className="banner" style={{ backgroundImage: `url(../assets/Layer44.png)` }}>
                    {/* <img src="../assets/Layer44.png" /> */}
                    <div className="text-center banner-text">
                        <h3>Contact Villa Lagoon Tile</h3>
                        <h5><a href="_black">Home </a><i class="fas fa-caret-right"></i> <a href="_blank">Contact Us</a></h5>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <div className="banner-box col-sm-3">
                            <div className="d-flex">
                                <i style={{ color: "#ecf5fd" }} class="fas fa-map-marker-alt fa-village"></i>
                                <div className="padding-left">
                                    <p>Villa Lagoon Tile</p>
                                    <p>-------------</p>
                                </div>
                            </div>

                            <br></br>
                            <div className="d-flex">
                                <i class="fas fa-map-marker-alt fa-location"></i>
                                <div className="padding-left">
                                    <p>901 Commerce Drive</p>
                                    <p>Unit 1-C, Gulf Shores, AL 36542-2834</p>
                                    <p>United States of America.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i class="fas fa-envelope fa-banner"></i>
                                <div className="padding-left">
                                    <p>info@VillaLagoonTile.com</p>
                                </div>

                            </div>
                            <div className="d-flex">
                                <i class="fas fa-phone fa-banner"></i>
                                <div className="padding-left">
                                    <p>1-251-968-3375</p>
                                </div>

                            </div>
                            <div className="d-flex">
                                <i class="fas fa-clock fa-banner"></i>
                                <div className="padding-left">
                                    <p>9am-5pm, US Central Time</p>
                                    <p>(November-February UTC-5,</p>
                                    <p>March-October UTC-6).</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner-box-2 col-sm-3">
                            <h4>-------. Get in touch .-------</h4>
                            <form action="/">
                                <input
                                    style={{ width: "80%" }}
                                    type="email"
                                    placeholder="Enter your email address"
                                    name="email" />
                                <br></br>
                                <br></br>
                                <input
                                    style={{ width: "80%" }}
                                    type="phone"
                                    placeholder="Enter phone number or Skype name"
                                    name="phone" />
                                <br></br>
                                <br></br>
                                <textarea rows="6" cols="27" placeholder="Message..." name="description">
                                </textarea>
                                <br></br>
                                <br></br>
                                <input
                                    className="inputButton"
                                    type="submit"
                                    value="SUBMIT   &gt;"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="infor-contain">
                        <div className="square-infor">
                            <img src="../assets/envelop.gif" />
                        </div>
                        <br></br>
                        <h5>Wholesale Inquiries</h5>
                        <p>Please Contact Us</p>
                    </div>
                    <div className="infor-contain2">
                        <div className="square-infor">
                            <img src="../assets/Shape1.png" /><br></br>
                        </div>
                        <br></br>
                        <h5>Samples and Ordering</h5>
                        <p>Simply contact us through any of the means listed above, and our expert sales staff will take it from there. We study cement tile so you don't have to!</p>
                    </div>

                </div>

            </div>
        </section>
    )
}