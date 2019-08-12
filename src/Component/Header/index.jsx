import React from 'react';

export default function Header() {
    return (
        <section>
            <nav className="navbar  navbar-light bg-light">
                <div className="container white">
                    This is top-fixed-bar
                </div>
            </nav>
            <nav className="navbar green">
                <div className="container">
                </div>
                <div className="container">

                </div>
                <div className="container">
                    <div className="row white">
                        <a href="callto:1-251-968-3375"><i className="fas fa-phone fa-green"></i>1-251-968-3375</a>
                        <a href="mailto:info@VillaLagoonTile.com"><i className="fas fa-envelope fa-green"></i> info@VillaLagoonTile.com</a>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-md bg-light navbar-dark third-nav">
                <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt="logo.png" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">CEMENT TILE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">MORE INFO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">COMMERCIAL</a>
                        </li>
                        <li className="nav-item">
                            <form action="/">
                                <input style={{ width: "200px" }} type="text" placeholder="Search.." name="search" />

                                <button className="button-search" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />


        </section>
    )
}
