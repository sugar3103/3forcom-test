import React from 'react';

export default function Header() {
    return (
        <section>
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container white">
                    This is top-fixed-bar
                </div>
            </nav>
            <nav class="navbar navbar-expand-md green">
                <div className="container">
                </div>
                <div className="container">

                </div>
                <div class="container">
                    <div className="row white">
                        <a href="callto:1-251-968-3375"><i class="fas fa-phone fa-green"></i>1-251-968-3375</a>
                        <a href="mailto:info@VillaLagoonTile.com"><i class="fas fa-envelope fa-green"></i> info@VillaLagoonTile.com</a>
                    </div>
                </div>
            </nav>
            <nav className="third-nav d-flex">
                <div className="logo">
                    <a href="/"><img src="../assets/logo.png" /></a>
                </div>

                <ul className="d-flex float-right">
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">CEMENT TILE</a>
                    </li>
                    <li>
                        <a href="/">BLOG</a>
                    </li>
                    <li>
                        <a href="/">COMMERCIAL</a>
                    </li>
                    <li>
                        <form action="/">
                            <input style={{width: "180px"}} type="text" placeholder="Search.." name="search"/>
                            
                            <button className="button-search" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                    </li>
                </ul>

            </nav>




        </section>
    )
}
