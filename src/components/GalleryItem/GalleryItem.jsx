import React, { useState } from "react";

import axios from "axios";

function GalleryItem (props){
    //const [name,setName]= useState(null);

    
    // toggling the image to show description
    const[showImage, setShowImage]=useState( true );

    const toggleImage = () =>{
        console.log( 'in toggleImage' ); 
        setShowImage( !showImage );
    }

    // like button put request
    
    const updateLikes=()=>{
      
        
        axios.put( '/gallery/like/' + props.gallery.id ).then( (response)=>{
          console.log('put successful');
          props.getGallery ();
        
        } ).catch((err)=>{
          console.log('failure to put data:', err);
        })
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
            <p>Likes: {props.gallery.likes}</p>

            <button className = 'likeButton' onClick = { updateLikes }>Like!</button>
            
        
        </div>
        
    )
} 

export default GalleryItem;