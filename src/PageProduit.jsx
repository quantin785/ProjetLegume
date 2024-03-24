import React from "react";
import Produit from "./Produit";
import "./PageProduit.css"
import Tomato from "./tomate.png"
import gingembre from "./gingembre.png"
import onion from "./onion.png"
import ProductBar from "./Product-Bar";
import zepck from "./img_1.png"

class PageProduit extends React.Component{
    render() {
        return(





            <div className="Page-Produit">

                <ProductBar/>
                <div className="produits">
                    <Produit
                    nom="Heirloom tomato"
                    image={Tomato}
                    prix="$5.99 / lb"
                    description="Grown in San Juan Capistrano, CA"
                />
                    <Produit
                        nom=" Organic ginger"
                        image={gingembre}
                        prix="$12.99 / lb"
                        description="Grown in Huntington Beach, CA"
                    />

                    <Produit
                        nom=" Red onion"
                        image={onion}
                        prix="$5.99 / lb"
                        description="Grown in San Juan Capistrano, CA"
                    />





                </div>







            </div>
        )
    }
}

export default PageProduit;