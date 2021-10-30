import { useState } from "react";
import GalleryList from "../GalleryList/GalleryList";


function Body (props){
    //const [name,setName]= useState(null);

    return (
        
        <div>
            <GalleryList gallery = {props.gallery}/>
        
        
        </div>

    )
} 

export default Body;