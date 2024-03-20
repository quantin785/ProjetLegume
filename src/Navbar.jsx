import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import { TfiClose } from "react-icons/tfi";
import {useRef} from "react";
import { SlBasket } from "react-icons/sl";





function Navbar (){

    const navRef = useRef();

    const showNavmenu = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (

        <div className="nav" >
            <h1 className="logo">World Peas</h1>
            <nav ref={navRef}>
                <ul>
                    <li><a>Shop</a></li>
                    <li><a>Newstand</a></li>
                    <li><a>Who we are</a></li>
                    <li><a>My profile</a></li>
                    <li>
                        <button className="basket"><SlBasket /> Basket</button>
                    </li>

                    <button className="close" onClick={showNavmenu}><TfiClose /></button>


                </ul>
            </nav>


            <button className='btn-nav' onClick={showNavmenu}><RxHamburgerMenu /></button>
        </div>
    )
}

export default Navbar;