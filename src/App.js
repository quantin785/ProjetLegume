import './App.css';
import Navbar from "./Navbar";
import Presentation from "./presentation";
import ImagePresentation from "./imagePresentation";
import React, { useRef,useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PageProduit from "./PageProduit";


function App() {
    const imagePresentationRef = useRef(null);

    const [showPageProduit, setShowPageProduit] = useState(false);

    const handleShopClick = () => {
        setShowPageProduit(!showPageProduit);
    };



    const handleScroll = () => {
        if (imagePresentationRef.current) {
            window.scrollTo({
                top: imagePresentationRef.current.offsetTop,
                behavior: "smooth",

            });
        }
    };

    return (

        <div className="App">
            <Navbar/>
            <div className="presentation1">
                <button className="scrollToBottom" onClick={handleScroll}><IoIosArrowDown/></button>
                <Presentation/>
            </div>

            <div ref={imagePresentationRef}>
                <ImagePresentation/>
            </div>
        </div>

    );
}

export default App;
