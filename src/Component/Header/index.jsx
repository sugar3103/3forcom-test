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
                        <a href="_blank"><i class="fas fa-phone fa-green"></i>1-251-968-3375</a>
                        <a href="_blank"><i class="fas fa-envelope fa-green"></i> info@VillaLagoonTile.com</a>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-md 3rd-nav">
                <div className="container logo">
                    <img src="../assets/logo.png" />
                </div>
                <a class="logo" href="#">
                    <p class="animated infinite zoomIn">Đường honganStore</p>
                </a>
                <ul>
                    <li>
                        <a href="#">Áo</a>
                        {/* <!-- sub menu 1  --> */}
                        <ul class="sub-menu1">
                            <li>
                                <a href="#">Áo thun</a>
                                {/* <!-- sub menu thu 2 --> */}
                                <ul class="sub-menu2">
                                    <li><a href="#">Áo thun</a></li>
                                    <li><a href="#">Áo thun trắng</a></li>
                                    <li><a href="#">Áo thun đỏ</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Áo ba lỗ</a>
                                <ul class="sub-menu2">
                                    <li><a href="#">Áo ba lỗ</a></li>
                                    <li><a href="#">Áo ba lỗ trắng</a></li>
                                    <li><a href="#">Áo ba lỗ đỏ</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Áo Sơ-mi</a>
                                <ul class="sub-menu2">
                                    <li><a href="#">Áo sơ-mi</a></li>
                                    <li><a href="#">Áo sơ-mi trắng</a></li>
                                    <li><a href="#">Áo sơ-mi đỏ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Váy</a>

                    </li>
                    <li><a href="#">SHORTS</a></li>
                    <li><a href="#">Quần Jeans</a></li>
                    <li><a href="#">Đầm</a></li>
                    <li><a href="#">Jumpsuit</a></li>
                </ul>

            </nav>


        </section>
    )
}
