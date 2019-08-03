import React from 'react';
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

export default function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}