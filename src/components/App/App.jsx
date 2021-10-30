import React from 'react';
import './App.css';
import Body from '../Body/Body';
import axios from 'axios';
import { useEffect, useState } from "react";



function App() {

  const[gallery, setGallery] = useState( [] );

  useEffect( ()=>{
    console.log( 'component loaded' );
    getGallery();
  }, []);


//get data from server
const getGallery=()=>{
  axios.get( '/gallery' ).then( (response)=>{
    console.log(response.data);
    setGallery(response.data);
  } ).catch((err)=>{
    console.log('failure to get gallery:', err);
  })
}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Body gallery = {gallery}/>
        
        <p>{JSON.stringify(gallery)}Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
