import React from "react";
import CartSvg from "../images/icon-cart-white.svg";
import { useState } from "react";
import Iconnext from "../images/icon-next.svg";
import Iconprevious from "../images/icon-previous.svg";
import Popup from "./Popup.js";

import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";

import Thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../images/image-product-4-thumbnail.jpg";
 
import UseMediaQuery from "../Hooks/useMediaQuery";
import UseMediaQuery2 from "../Hooks/useMediaQuery";

function Body({ newProduct, setNewProduct }){

    const [pricePdc,setPricePdc] = useState(250.00);
    const [count,setCount] = useState(1);
    const [countImage,setCountImage] = useState(0);

    const tabletSize = UseMediaQuery('(min-width: 768px)');
    const maxtabletSize = UseMediaQuery2('(max-width: 768px)');

    const imagesPdc =[Image1,Image2,Image3,Image4];
    const imagesThumbnails =[Thumbnail1,Thumbnail2,Thumbnail3,Thumbnail4];

    const [popUp,setPopup] = useState(false);
    const popupSlide = () => setPopup(value => !value);
    const [imaProduct,setImgProduct] = useState(imagesPdc[0])

    const mapThumb = imagesThumbnails.map((img,index)=>{
        return<div key={index} className="wrap-thumb">
            <img className="image-thumbnail" onClick={()=>{setImgProduct(imagesPdc[index])}} src={img}/>
            <div className="overlay-thumb"></div>
        </div>
    })

    const negative =()=>{
        if(count>1){
            setCount(count-1);
            setPricePdc(pricePdc-250.00);
        }
        else{
            setCount(1);
        }
    }
    
    const positive=()=>{
        setCount(count+1);
        setPricePdc(pricePdc+250.00);
    }

    const sale = ((pricePdc/100)*50);

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

    const addtoCart = () => {
        setNewProduct({
            quantity: newProduct.quantity + count,
            price: newProduct.price,
            title: newProduct.title
        });
    };

    function ButtonLR(){
        return(
            <div className="btn-lr">
                <button className="btn-image" onClick={()=>slideLeft()}>
                    <img className="svg-btn-image" src={Iconprevious}/>
                </button>
                <button className="btn-image" onClick={()=>slideRight()}>
                    <img className="svg-btn-image" src={Iconnext}/>
                </button>
            </div>
        )
    }

    let popup = null;
    if(popUp){
        popup=(
            <Popup 
            Closepopup={()=>setPopup(false)}
            />
        );
    }

    return(
        
        <div className="body-product">
            <div className="product-section">
                <img className="image-product" src={imaProduct} onClick={()=>setPopup(true)}/>
                {maxtabletSize&&(<>{ButtonLR()}</>)}
                
                <div className="thumbnail">
                {tabletSize && (
                    <>{mapThumb}</>
                )}
                </div>
            </div>
            <div className="product-description">
                <div className="title-product">
                    <span>Sneaker Company</span>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>
                <div className="section-price">
                    <div className="price-product">
                        <p className="price">${sale.toFixed(2)}</p>
                        <p className="percen-discount">50%</p>
                    </div>
                    <p className="original-price">${pricePdc.toFixed(2)}</p>
                </div>
                
                <div className="number-cart">
                    <div className="number">
                        <span onClick={negative}>-</span>
                        <p>{count}</p>
                        <span onClick={positive}>+</span>
                    </div>
                    <button className="btn-addcart" onClick={()=>addtoCart()} type="button">
                        <img className="svg-cart" src={CartSvg}/>
                        <p>Add to cart</p>
                    </button>
                </div>
            </div>
            {popup}
        </div>
    );
}

export default Body;