import React from 'react';
import Layout from "./Component/Layout";
import Body from "./Component/Body";
import Calculator from "./Component/Calculator";
import './App.css';

function App() {
  return (
    <Layout>
      <Body />
      <Calculator />
    </Layout>
  );
}

export default App;
