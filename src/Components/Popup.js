import React from "react";
import { useState } from "react";

import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

import Thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../images/image-product-4-thumbnail.jpg";

function Popup(props){

    const imagesPdc =[Image1,Image2,Image3,Image4];
    const imagesThumbnails =[Thumbnail1,Thumbnail2,Thumbnail3,Thumbnail4];

    const [countImage,setCountImage] = useState(0);
    
    const [imaProduct,setImgProduct] = useState(imagesPdc[0]);

    const mapThumb = imagesThumbnails.map((img,index)=>{
        return<div key={index} className="wrap-thumb">
            <img className="image-thumbnail" onClick={()=>{setImgProduct(imagesPdc[index])}} src={img}/>
            <div className="overlay-thumb"></div>
        </div>
    })

    const slideRight=()=>{
        if(countImage<imagesPdc.length-1){
            setImgProduct(imagesPdc[countImage+1]);
            setCountImage(countImage+1);
        }
        else{
            setImgProduct(imagesPdc[0]);
            setCountImage(0);
        }
    }

    const slideLeft=()=>{
        if(countImage>0){
            setCountImage(countImage-1);
            setImgProduct(imagesPdc[(countImage-1)]);
        }
        else{
            setCountImage(imagesPdc.length-1);
            setImgProduct(imagesPdc[imagesPdc.length-1]);
        }
    }
    

    function ButtonLR(){
        return(
            <div className="btn-lr-popup">
                <button className="btn-image-popup" onClick={()=>slideLeft()}>
                    <svg className="svg-arrow" width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/>
                    </svg>
                </button>
                <button className="btn-image-popup" onClick={()=>slideRight()}>
                    <svg className="svg-arrow" width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/>
                    </svg>
                </button>
            </div>
        )
    }

    return(
        <div className="popup-component">
            <div className="product-section">
                <div className="wrap-close">
                    
                    <svg className="svg-close" onClick={props.Closepopup} width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" >
                    <path d="m11.596.782 2.122 2.122L9.12 
                    7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 
                    2.404.782l4.595 4.596L11.596.782Z"  fill-rule="evenodd"/>
                    </svg>
                </div>
                <img id="product-popup" className="image-product-popup" src={imaProduct}/>
                {ButtonLR()}
            <div className="thumbnail">
                   {mapThumb}
            </div>
            </div>
        </div>
    );
}

export default Popup;