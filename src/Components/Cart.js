import React from "react";
import Delete from "../images/icon-delete.svg";

import Thumbitem from "../images/image-product-1-thumbnail.jpg";

function Cart({ newProduct, setNewProduct }){
    const totalPrice = (newProduct.price*newProduct.quantity);
    function ItemInCart(){
        return(
        <div className="stack-item">
            <div><img src={Thumbitem}/></div>
            <div className="item-detail">
                <p>{newProduct.title}</p>
                <div className="price-amount">
                <p>$125.00 x {newProduct.quantity}&nbsp;</p>
                <p className ="total-amount">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <div>
            <button className="btn-delete" onClick={()=>setZero()} type="button">
                <img className="icon-delete" src={Delete}/> 
            </button>
            </div>
            
        </div>
        );
    }

    const setZero=()=>{
        setNewProduct({...newProduct,quantity:0})
    }
    
    return(
        <div className="cart-component">
            <div className="head-cart">
                <p>Cart</p>
            </div>
            <div className="cart-item">
                {newProduct.quantity > 0 ? (<>
                    {ItemInCart()}
                    <button className="btn-checkout" type="button">
                        <p>Checkout</p>
                    </button>
                    </>):
                    (<>
                    <p className="empty">Your cart is empty.</p>
                    
                    </>)}
                
            </div>
        </div>
    );
}

export default Cart;