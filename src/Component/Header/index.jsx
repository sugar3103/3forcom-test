import React from 'react';
import img from '../../img/logo.png'
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
                    <div className="row">
                        <a href="_blank"><i class="fas fa-phone fa-green"></i>1-251-968-3375</a>
                        <a href="_blank"><i class="fas fa-envelope fa-green"></i> info@VillaLagoonTile.com</a>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-md 3rd-nav">
                <div className="container logo">
                    <img src="../assets/logo.png" />
                </div>

            </nav>
            

        </section>
    )
}
