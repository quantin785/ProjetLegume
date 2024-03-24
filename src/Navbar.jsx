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

    const handleShopClick = () => {
        // Ajoutez le code ici pour gérer le clic sur le lien "Shop"
        // Par exemple, vous pouvez naviguer vers la page de magasin ou effectuer d'autres actions.
        console.log("Shop clicked");
    }

    return (

        <div className="nav" >
            <h1 className="logo">World Peas</h1>
            <nav ref={navRef}>
                <ul>
                    <li className="li-nav"><a onClick={handleShopClick}>Shop</a></li>
                    <li className="li-nav"><a>Newstand</a></li>
                    <li className="li-nav"><a>Who we are</a></li>
                    <li className="li-nav"><a>My profile</a></li>
                    <li className="li-nav">
                        <button className="basket"><SlBasket /> Basket</button>
                    </li >

                    <button className="close" onClick={showNavmenu}><TfiClose /></button>


                </ul>
            </nav>


            <button className='btn-nav' onClick={showNavmenu}><RxHamburgerMenu /></button>
        </div>
    )
}

export default Navbar;