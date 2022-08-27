import React from "react";
import Close from "../images/icon-close.svg";
import { useEffect } from "react";

function Menu(props){
    useEffect(() => {
        document.documentElement.style.overflowY = "hidden";
        return () => {
          document.documentElement.style.overflowY = "auto";
        };
      }, []);

    return(
        <div className="menu-component">
            <div className="menu-popup">
                    <svg onClick={props.Closemenu} className="close-menu" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" >
                    <path d="m11.596.782 2.122 2.122L9.12 
                    7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 
                    2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/>
                    </svg>
                <div className="list-menu">
                    <ul>
                    <li className="btn-menu-popup">Collections</li>
                    <li className="btn-menu-popup">Men</li>
                    <li className="btn-menu-popup">Women</li>
                    <li className="btn-menu-popup">About</li>
                    <li className="btn-menu-popup">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;