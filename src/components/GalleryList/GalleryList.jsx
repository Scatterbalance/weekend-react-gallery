import React, { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList (props){
    //const [name,setName]= useState(null);

    return (
        
        
            
           <div className ='galleryList'>
               {

            props.gallery.map( (thisItem)=>(<GalleryItem  gallery = {thisItem} key = {thisItem.id}/>))
           }
           </div>
        
        
       
        
    )
} 

export default GalleryList;