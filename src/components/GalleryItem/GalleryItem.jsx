import React, { useState } from "react";

import Axios from "axios";

function GalleryItem (props){
    //const [name,setName]= useState(null);

    const[showImage, setShowImage]=useState( true );

    const toggleImage = () =>{
        console.log( 'in toggleImage' ); 
        setShowImage( !showImage );
    }

    return (
        
        <div className = "imageBlock">
            {
                showImage ?
            <img className= "image" src={props.gallery.path} alt ={props.gallery.description} onClick={ toggleImage } />:
            <div>
            <h2  onClick={ toggleImage }>{ props.gallery.description }</h2> 
            </div>// false
            }

            <button className = 'likeButton' >Like!</button>
            
        
        </div>
        
    )
} 

export default GalleryItem;