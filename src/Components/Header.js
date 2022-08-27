import React from "react";
import Logo from "../images/logo.svg";
import MenuSvg from "../images/icon-menu.svg"
import Avatar from "../images/image-avatar.png"
import { useState } from "react";
import { useRef } from 'react';
import UseMediaQuery from "../Hooks/useMediaQuery";
import Menu from "./Menu";

import Cart from "./Cart.js";

function Header({ newProduct, setNewProduct }){
    const modalCart = useRef(null);
    const tabletSize = UseMediaQuery('(max-width: 768px)');
    
    const [popUp,setPopup] = useState(false);
    const [popupMenu, setPopupMenu] = useState(false);

    const popupItemMenu = () => setPopupMenu(value => !value);
    const popupItem = () => setPopup(value => !value);

    let popupmenu = null;
    if(popupMenu){
        popupmenu=(
            <Menu Closemenu={()=>setPopupMenu(false)}/>
        );
    }

    let popup = null;
    if(popUp){
        popup=(
            <Cart newProduct={newProduct} setNewProduct={setNewProduct} modalCart={modalCart}/>
        );
    }

    return(
        <div className="header">
            {popupmenu}
            <div className="logo-menu">
            {tabletSize && (
                    <button className="btn-delete" onClick={()=>popupItemMenu()}>
                        <img className="cart-svg" src={MenuSvg} />
                    </button>
                )}
                <img className="logo-svg" src={Logo}/>
                <div className="menu">
                    <ul>
                    <li className="btn-menu"><p className="test-btn">Collections</p></li>
                    <li className="btn-menu">Men</li>
                    <li className="btn-menu">Women</li>
                    <li className="btn-menu">About</li>
                    <li className="btn-menu">Contact</li>
                    </ul>
                </div>
            </div>
            
            <div className="cart-avatar">
                <div className="cart-item-buttom" onClick={popupItem}>
                <svg className="cls-1" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 
                    1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 
                    0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 
                    2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 
                    0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 
                    0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 
                    5.53Z" fill-rule="nonzero"/>
                    </svg>
                    {newProduct.quantity > 0 && <span>{newProduct.quantity}</span>}
                    {popup}
                </div>
                <img className="avatar" src={Avatar}/>
            </div>
        </div>
    );
}

export default Header;