import React from 'react';
import Layout from "./Component/Layout";
import Body from "./Component/Body";

import './App.css';

function App() {

  const newPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('foo');
    },1000);
    // reject('newPromise error')
  });

  newPromise.then(function(value){
    console.log(value)
  }).catch(function(error){
    console.log("newPromise error", error)
  })
  
  console.log(newPromise)

  return (
    <>
      <Layout>
        <Body />

      </Layout>
    </>
  );
}

export default App;
