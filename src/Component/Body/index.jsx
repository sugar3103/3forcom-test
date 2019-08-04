import React, { useState } from "react";

export default function Body(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [theModal, setTheModal] = useState({ visible: false })
    const openSuccessModal = () => {
        setTheModal({ visible: true })
    }
    const closeSuccessModal = (e) => {
        e.preventDefault();
        setTheModal({ visible: false })
        props.history.push("./")
    }
    const onSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     await firebase.auth().signInWithEmailAndPassword(email, password);
        //     firebase.auth().onAuthStateChanged(user => {
        //         if (user) {
        //             setEmail("")
        //             setPassword("")
        //             openSuccessModal();
        //         } else {

        //         }
        //     })
        // } catch (error) {
        //     setError(error.message)
        // }
        // // console.log(email, password)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassWord = (e) => {
        setPassword(e.target.value)
    }
    const onRegister = () => {
        props.history.push('./register')
    }
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
                            <p>Villa Lagoon Tile</p>
                            <p>-------------</p>
                            <br></br>
                            <div className="d-flex">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <p>901 Commerce Drive</p>
                                    <p>Unit 1-C, Gulf Shores, AL 36542-2834</p>
                                    <p>United States of America.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i class="fas fa-envelope"></i>
                                <p>info@VillaLagoonTile.com</p>
                            </div>
                            <div className="d-flex">
                                <i class="fas fa-phone"></i>
                                <p>1-251-968-3375</p>
                            </div>
                            <div className="d-flex">
                                <i class="fas fa-clock"></i>
                                <div>
                                    <p>9am-5pm, US Central Time</p>
                                    <p>(November-February UTC-5,</p>
                                    <p>March-October UTC-6).</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner-box-2 col-sm-3">
                            <h3>-------. Get in touch .-------</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <div className="basic-login">
                                            <h3>-------. Get in touch .-------</h3>
                                            <p className="text-danger">{error}</p>
                                            <form onSubmit={onSubmit}>

                                                <input id="name"
                                                    value={email}
                                                    type="text"
                                                    placeholder="Enter your email address"
                                                    onChange={onChangeEmail} />
                                                <br></br>
                                                <br></br>
                                                <input id="phone"
                                                    type="phone"
                                                    value={password}
                                                    placeholder="Enter phone number"
                                                    onChange={onChangePassWord} />
                                                <div className="login-action mb-20 fix">
                                                    <span className="log-rem f-left">
                                                        <input id="remember" type="checkbox" />
                                                        <label htmlFor="remember">Remember me!</label>
                                                    </span>
                                                    <span className="forgot-login f-right">
                                                        <a href="_blank">Lost your password?</a>
                                                    </span>
                                                </div>
                                                <button className="banner-submit">Login Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}