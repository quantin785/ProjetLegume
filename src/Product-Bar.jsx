import "./productbar.css"
import {useRef, useState} from "react";

function ProductBar (){

    const [boutonActif, setBoutonActif]= useState(0)

    const HandleClick = (index) => {
        setBoutonActif(index=== boutonActif? null:index);
    }

    return(
        <div className="product-bar">
            <h1 className="titleP">
                Produce
            </h1>


            <div className="desc">
                <ul>
                    <li><p><strong>Fresh</strong> — August 21, 2023</p></li>


                </ul>


                <button className="Default" style={{ backgroundColor: boutonActif === 0 ? '#5c8541' : 'gray' }} onClick={() => HandleClick(0)}>
                    Default
                </button>


                <button className="A-Z"  style={{ backgroundColor: boutonActif === 1 ? '#5c8541' : 'gray' }} onClick={() => HandleClick(1)}>A-Z</button>


                <button className="List-view"  style={{ backgroundColor: boutonActif === 2 ? '#5c8541' : 'gray' }} onClick={() => HandleClick(2)}>List view</button>

            </div>
        </div>
    )


}

export default ProductBar